import zxcvbn from 'zxcvbn'

export function validateEmail(email) {
  const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g

  const regexObj = new RegExp(regex)

  const isValid = regexObj.test(email)

  return isValid
}

export function checkPasswordStrength(password) {
  const passwordStrength = zxcvbn(password)

  return passwordStrength
}
