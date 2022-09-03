import { prepareInputPhone } from './helpers'

export const CHAT_IDS = [296750799, 5563634031]
export const NAVIGATION = [
  { name: 'Foundation history', short: 'History', href: '#history' },
  { name: 'Our activities', short: 'Activities', href: '#gallery' },
  { name: 'Become a partner', short: 'Partners', href: '#partners' },
]

export const PHONE = '+380 (93) 157 04 08'
export const EMAIL = ''
export const INSTAGRAM = 'https://www.instagram.com/poparam.foundation/'
export const INSTAGRAM_NESTERKO = 'https://www.instagram.com/anton.nesterko/'
export const FACEBOOK = ''
export const TELEGRAM = `https://t.me/${prepareInputPhone(PHONE)}`
export const VIBER = `viber://chat?number=${prepareInputPhone(PHONE)}`

export const CALCULATED = 6
