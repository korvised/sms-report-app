const validateMsisdn = (phone: string) => {
  if (phone.startsWith("020") || phone.startsWith("030")) {
    return phone.substring(3, phone.length)
  } else if (phone.startsWith("+85620") || phone.startsWith("+85630")) {
    return phone.substring(6, phone.length)
  } else if (phone.startsWith("85620") || phone.startsWith("85630")) {
    return phone.substring(5, phone.length)
  }

  return phone
}

export default validateMsisdn
