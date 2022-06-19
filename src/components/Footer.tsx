import Facebook from '../assets/facebook'
import Instagram from '../assets/instagram'
import Telegram from '../assets/telegram'
import Viber from '../assets/viber'
import { EMAIL, FACEBOOK, INSTAGRAM, PHONE, TELEGRAM, VIBER } from '../const'
import { prepareEmail, preparePhone } from '../helpers'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <div className="py-12 bg-black text-center">
      <div className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-sky-500">
        <span className="text-yellow-300">Разом</span> до перемоги!
      </div>
      <div className="py-5 md:py-10 space-y-2 md:space-y-0 md:space-x-6 flex flex-col md:flex-row items-center justify-center">
        {PHONE && (
          <a href={preparePhone(PHONE)} className="text-white">
            {PHONE}
          </a>
        )}
        {EMAIL && (
          <a href={prepareEmail(EMAIL)} className="text-white">
            {EMAIL}
          </a>
        )}
        <div className="!mt-4 md:!mt-0 space-x-4 flex items-center">
          {INSTAGRAM && (
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noreferrer"
              className="w-6 h-6"
            >
              <Instagram />
            </a>
          )}
          {FACEBOOK && (
            <a
              href={FACEBOOK}
              target="_blank"
              rel="noreferrer"
              className="w-6 h-6"
            >
              <Facebook />
            </a>
          )}
          {TELEGRAM && (
            <a
              href={TELEGRAM}
              target="_blank"
              rel="noreferrer"
              className="w-6 h-6"
            >
              <Telegram />
            </a>
          )}
          {VIBER && (
            <a
              href={VIBER}
              target="_blank"
              rel="noreferrer"
              className="w-6 h-6"
            >
              <Viber />
            </a>
          )}
        </div>
      </div>
      <a href="https://poparam.com.ua/" className="text-gray-400">
        &copy; {year} Благодійний фонд «ПоПарам»
      </a>
    </div>
  )
}
