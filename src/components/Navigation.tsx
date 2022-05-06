import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { ExternalLinkIcon } from '@heroicons/react/solid'

import BlackLogo from '../assets/logo-black.jpg'
import WhiteLogo from '../assets/logo-white.jpg'

const navigation = [
  { name: 'Історія створення', href: '#history' },
  { name: 'Діяльність фонду', href: '#gallery' },
  { name: 'Стати партнером', href: '#partners' },
]

function Navigation() {
  const handleClick = (href: string) => {
    document
      .getElementById(href.replace('#', ''))
      ?.scrollIntoView({ behavior: 'smooth', inline: 'nearest' })
  }
  return (
    <Popover as="header" className="relative">
      <div className="bg-black pt-6">
        <nav
          className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
          aria-label="Global"
        >
          <div className="flex items-center flex-1">
            <div className="flex items-center justify-between w-full md:w-auto">
              <div>
                <span className="sr-only">Workflow</span>
                <img
                  className="h-16 w-auto sm:h-20 ml-2 sm:ml-0 sm:-my-2"
                  src={BlackLogo}
                  alt=""
                />
              </div>
              <div className="flex items-center md:hidden">
                <Popover.Button className="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="hidden space-x-8 md:flex md:ml-4 lg:ml-10">
              {navigation.map(item => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-white hover:text-gray-300"
                  onClick={e => {
                    e.preventDefault()
                    handleClick(item.href)
                  }}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-6">
            <a
              href="https://www.instagram.com/anton.nesterko"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700"
              target="_blank"
              rel="noreferrer"
            >
              <span className="hidden lg:inline-block">Дізнатись більше</span>
              <span className="lg:hidden">Більше</span>
              <ExternalLinkIcon
                className="-mr-1 ml-3 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </a>
          </div>
        </nav>
      </div>

      <Transition
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top md:hidden"
        >
          <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="px-5 pt-4 flex items-center justify-between">
              <div>
                <img className="h-16 w-auto" src={WhiteLogo} alt="" />
              </div>
              <div className="-mr-2">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500">
                  <span className="sr-only">Close menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="pt-5 pb-6">
              <div className="px-2 space-y-1">
                {navigation.map(item => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                    onClick={e => {
                      e.preventDefault()
                      handleClick(item.href)
                    }}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="mt-6 px-5">
                <a
                  href="https://www.instagram.com/anton.nesterko"
                  className="flex items-center justify-center w-full py-3 px-4 rounded-md shadow bg-gradient-to-r text-white font-medium bg-gray-600 hover:bg-gray-700"
                  target="_blank"
                  rel="noreferrer"
                >
                  Дізнатись більше
                  <ExternalLinkIcon
                    className="-mr-1 ml-3 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default Navigation
