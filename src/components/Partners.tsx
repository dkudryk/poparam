import PartnersImage from '../assets/partners.jpg'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { CheckCircleIcon } from '@heroicons/react/solid'
import { useState } from 'react'
import { CHAT_IDS } from '../const'
import { useTranslation } from 'react-i18next'

function Partners() {
  const { t } = useTranslation()
  const SEND_MESSAGE_URL = `https://api.telegram.org/bot${process.env.REACT_APP_TOKEN}/sendMessage`
  const initialValues = {
    name: '',
    phone: '',
    text: '',
  }
  const validationSchema = Yup.object({
    phone: Yup.string()
      .required(t('Required field'))
      .matches(
        /^\+?3?8?(0\d{9})$/,
        t('Invalid format (must be: +380991234567 or 0991234567)'),
      ),
    text: Yup.string().required(t('Required field')),
  })
  const [success, setSuccess] = useState(false)
  const {
    values,
    errors,
    touched,
    handleSubmit,
    handleChange,
    handleBlur,
    resetForm,
    isSubmitting,
  } = useFormik<typeof initialValues>({
    initialValues,
    validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      const text = [
        '<u><b>НОВЕ ПОВІДОМЛЕННЯ</b></u>',
        ...(values.name ? [`<b>Ім'я:</b> ${values.name}`] : []),
        `<b>Телефон:</b> ${values.phone}`,
        `<b>Текст:</b> ${values.text}`,
      ].join('\n')
      await Promise.all(
        CHAT_IDS.map(
          async chat_id =>
            await fetch(SEND_MESSAGE_URL, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                chat_id,
                text,
                parse_mode: 'html',
              }),
            }),
        ),
      )
      resetForm({ values: initialValues })
      setSubmitting(false)
      setSuccess(true)
      setTimeout(() => setSuccess(false), 3000)
    },
  })
  return (
    <div id="partners" className="relative bg-black">
      <div className="hidden sm:block h-56 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
        <img
          className="w-full h-full object-cover"
          src={PartnersImage}
          alt=""
        />
      </div>
      <div className="relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-16 md:py-24 lg:px-8 lg:py-28">
        <div className="md:ml-auto md:w-1/2 md:pl-10">
          <div className="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">
            <p className="mb-4">{t('partners1')}</p>
            <p>{t('partners2')}</p>
          </div>
          <h3 className="mt-12 font-bold text-base sm:text-xl lg:text-lg xl:text-xl text-gray-300">
            {t('Any questions or propositions? Write us!')}
          </h3>
          <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-2 gap-6">
            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-sky-500"
              >
                {t('Your phone number')}
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="+380991234567"
                  className="shadow-sm focus:ring-sky-500 focus:border-sky-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phone}
                  disabled={isSubmitting}
                />
                {errors.phone && touched.phone && (
                  <p className="mt-2 text-xs text-red-500">{errors.phone}</p>
                )}
              </div>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-sky-500"
              >
                {t('First name')}
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder={t('Enter your name')}
                  className="shadow-sm focus:ring-sky-500 focus:border-sky-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  disabled={isSubmitting}
                />
                {errors.name && touched.name && (
                  <p className="mt-2 text-xs text-red-500">{errors.name}</p>
                )}
              </div>
            </div>
            <div className="col-span-2">
              <label
                htmlFor="text"
                className="block text-sm font-medium text-yellow-300"
              >
                {t('Message')}
              </label>
              <div className="mt-1">
                <textarea
                  name="text"
                  id="text"
                  placeholder={t('Write your message or proposition')}
                  className="h-20 shadow-sm focus:ring-yellow-300 focus:border-yellow-300 block w-full sm:text-sm border-gray-300 rounded-md resize-none"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.text}
                  disabled={isSubmitting}
                />
                {errors.text && touched.text && (
                  <p className="mt-2 text-xs text-red-500">{errors.text}</p>
                )}
              </div>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <button
                type="submit"
                className="flex items-center justify-center w-full py-3 px-4 rounded-md shadow bg-gradient-to-r text-white font-medium bg-gray-600 hover:bg-gray-700"
                disabled={isSubmitting}
              >
                {t('Send')}
              </button>
            </div>
            {success && (
              <div className="col-span-2 sm:col-span-1">
                <div className="rounded-md bg-green-50 py-3 px-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <CheckCircleIcon
                        className="h-5 w-5 text-green-400"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="ml-2 overflow-hidden">
                      <p className="text-sm font-medium text-green-800 truncate">
                        {t('Sent. Thank you!')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Partners
