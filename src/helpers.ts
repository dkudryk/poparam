export const preparePhone = (phone: string) => {
  return 'tel:' + prepareInputPhone(phone)
}

export const prepareInputPhone = (phone: string) => {
  return phone
    .replaceAll(' ', '')
    .replaceAll('-', '')
    .replaceAll('(', '')
    .replaceAll(')', '')
}

export const prepareEmail = (email: string) => {
  return `mailto:${email}`
}
