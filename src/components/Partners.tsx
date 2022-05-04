import { ExternalLinkIcon } from '@heroicons/react/solid'

import PartnersImage from '../assets/partners.jpg'

function Partners() {
  return (
    <div id="partners" className="relative bg-black">
      <div className="h-56 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
        <img
          className="w-full h-full object-cover"
          src={PartnersImage}
          alt=""
        />
      </div>
      <div className="relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32">
        <div className="md:ml-auto md:w-1/2 md:pl-10">
          <h2 className="mb-12 text-white text-4xl font-extrabold tracking-tight sm:text-5xl">
            Стати партнером може кожен, якщо ви
          </h2>
          <div className="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">
            <p className="mb-4">
              - Людина із активною життєвою позицією та хочете допомагати
              Україні у війні, але не знаєте як;
            </p>
            <p>
              - Компанія чи організація (ваша діяльність може взагалі бути не
              пов’язана із військовою справою), яка готова підтримати нашу
              діяльність на партнерських умовах.
            </p>
            <p className="mt-12">Обов’язково напишіть нам:</p>
          </div>
          <div className="mt-8">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
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
      </div>
    </div>
  )
}

export default Partners
