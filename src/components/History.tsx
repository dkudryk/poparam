import { useTranslation } from 'react-i18next'

function History() {
  const { t } = useTranslation()
  return (
    <div id="history" className="bg-gray-50">
      <div className="max-w-6xl mx-auto py-24 px-4 sm:pt-32 sm:pb-40 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="mb-12 text-3xl font-extrabold sm:text-4xl sm:tracking-tight lg:text-5xl">
            {t('The history of the foundation «PoParam»')}
          </h2>
          <div className="text-base text-gray-500 sm:text-xl lg:text-lg xl:text-xl">
            <p className="mb-8">{t('history1')}</p>
            <p className="mb-8">{t('history2')}</p>
            <h3 className="text-lg font-extrabold sm:text-xl sm:tracking-tight lg:text-2xl text-black">
              {t('Our mission')}
            </h3>
            <p>
              {t('Act as quickly as you can!')}
              <br />
              {t(
                'Each timely completed request will save lives and bring you closer to victory!',
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default History
