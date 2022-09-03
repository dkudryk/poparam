import { useTranslation } from 'react-i18next'

export default function Requisites() {
  const { t } = useTranslation()
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto text-center py-20 px-4 sm:px-6 lg:py-24 lg:px-8">
        <h2 className="mb-10 sm:mb-14 text-3xl font-extrabold sm:text-4xl sm:tracking-tight lg:text-5xl">
          {t('You can also help us! PoParam Charitable Foundation')}
        </h2>
        <div className="space-y-10 sm:space-y-20">
          <div>
            <h2 className="mb-2 sm:mb-6 text-2xl font-extrabold sm:text-3xl sm:tracking-tight lg:text-4xl">
              PayPal
            </h2>
            <div className="text-base text-gray-500 sm:text-2xl lg:text-xl xl:text-2xl">
              <p>Nesterkooo@gmail.com</p>
            </div>
          </div>
          <div>
            <h2 className="mb-2 sm:mb-6 text-xl font-extrabold sm:text-3xl sm:tracking-tight lg:text-4xl">
              4441 1144 5688 0192
            </h2>
            <div className="text-base text-gray-500 sm:text-2xl lg:text-xl xl:text-2xl ">
              <div className="mb-4 sm:mb-8 space-y-2 sm:space-y-4">
                <p>
                  <a
                    href="https://send.monobank.ua/9uYiW51TN9"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://send.monobank.ua/9uYiW51TN9
                  </a>
                </p>
                <p>
                  {t('Purpose of payment')}: <br className="block sm:hidden" />«
                  {t('Charity')}»
                </p>
                <p>
                  {t('BO PoParam Charitable Foundation')}
                  <br />
                  {t('EDRPOU')} - 44206864
                </p>
              </div>
              <div className="space-y-4 sm:space-y-8">
                <p>
                  <span className="text-lg font-extrabold sm:text-xl sm:tracking-tight lg:text-2xl text-black">
                    {t('UAH')}
                  </span>
                  <br />
                  UA 13 334851 00000000 26004175924
                </p>
                <p>
                  <span className="text-lg font-extrabold sm:text-xl sm:tracking-tight lg:text-2xl text-black">
                    {t('Dollar')}
                  </span>
                  <br />
                  UA 13 334851 00000000 26004175924
                </p>
                <p>
                  <span className="text-lg font-extrabold sm:text-xl sm:tracking-tight lg:text-2xl text-black">
                    {t('Euro')}
                  </span>
                  <br />
                  UA 13 334851 00000000 26004175924
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
