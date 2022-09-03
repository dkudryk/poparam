import { Fragment, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

import BlackLogo from '../assets/logo-black.jpg'
import WhiteLogo from '../assets/logo-white.jpg'
import Instagram from '../assets/instagram'
import { INSTAGRAM, NAVIGATION, PHONE } from '../const'
import { preparePhone } from '../helpers'

function Navigation() {
  const { t, i18n } = useTranslation()

  const oppositeLanguage = i18n.language === 'en' ? 'ua' : 'en'

  useEffect(() => {
    document.title = t('PoParam Charitable Foundation. Together till victory!')
    const metaDescription = document.querySelector('meta[name="description"]')
    metaDescription && metaDescription.setAttribute('content', t('description'))
  }, [oppositeLanguage])

  const handleClick = (href: string) => {
    document
      .getElementById(href.replace('#', ''))
      ?.scrollIntoView({ behavior: 'smooth', inline: 'nearest' })
  }

  const handleChangeLang = () => {
    i18n.changeLanguage(oppositeLanguage)
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
                  className="h-20 w-auto ml-2 sm:ml-0 -my-2"
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
            <div className="hidden space-x-8 md:flex md:ml-10">
              {NAVIGATION.map(item => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-white hover:text-gray-300"
                  onClick={e => {
                    e.preventDefault()
                    handleClick(item.href)
                  }}
                >
                  <span className="hidden lg:inline">{t(item.name)}</span>
                  <span className="lg:hidden">{t(item.short)}</span>
                </a>
              ))}
            </div>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-4">
            {PHONE && (
              <a
                href={preparePhone(PHONE)}
                className="font-bold text-xl text-white"
              >
                {PHONE}
              </a>
            )}
            {INSTAGRAM && (
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8"
              >
                <Instagram />
              </a>
            )}
            <div
              onClick={handleChangeLang}
              className="font-bold text-white hover:text-yellow-300 uppercase cursor-pointer"
              title={`${t('Switch to')} ${oppositeLanguage.toUpperCase()}`}
            >
              {oppositeLanguage}
            </div>
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
                {NAVIGATION.map(item => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                    onClick={e => {
                      e.preventDefault()
                      handleClick(item.href)
                    }}
                  >
                    {t(item.name)}
                  </a>
                ))}
              </div>
              <div className="mt-6 px-5 flex items-center justify-between">
                {INSTAGRAM && (
                  <a
                    href={INSTAGRAM}
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8"
                  >
                    <Instagram />
                  </a>
                )}
                {PHONE && (
                  <a
                    href={preparePhone(PHONE)}
                    className="font-bold text-xl text-black"
                  >
                    {PHONE}
                  </a>
                )}
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default Navigation
