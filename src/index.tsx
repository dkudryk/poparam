import React from 'react'
import ReactDOM from 'react-dom/client'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import './css/index.css'
import App from './App'
import resources from './locales/resources'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    //debug: true,
    resources,
    interpolation: {
      escapeValue: false,
    },
  })

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
