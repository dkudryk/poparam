export const preparePhone = (phone: string) => {
  return 'tel:' + phone.replaceAll(' ', '').replaceAll('-', '')
}

export const prepareEmail = (email: string) => {
  return `mailto:${email}`
}
