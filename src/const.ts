import { prepareInputPhone } from './helpers'

export const CHAT_IDS = [296750799, 5563634031]
export const NAVIGATION = [
  { name: 'Історія створення', short: 'Історія', href: '#history' },
  { name: 'Діяльність фонду', short: 'Діяльність', href: '#gallery' },
  { name: 'Стати партнером', short: 'Партнери', href: '#partners' },
]

export const PHONE = '+380 (93) 157 04 08'
export const EMAIL = ''
export const INSTAGRAM = 'https://www.instagram.com/poparam.foundation/'
export const INSTAGRAM_NESTERKO = 'https://www.instagram.com/anton.nesterko/'
export const FACEBOOK = ''
export const TELEGRAM = `https://t.me/${prepareInputPhone(PHONE)}`
export const VIBER = `viber://chat?number=${prepareInputPhone(PHONE)}`
