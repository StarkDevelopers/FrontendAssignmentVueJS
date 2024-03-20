import { MD5 } from 'crypto-js'

export function getProfileUrl(email) {
  // Normalize email
  var normalizedEmail = email.trim().toLowerCase()

  // Calculate MD5 hash
  var hash = MD5(normalizedEmail)

  return `https://gravatar.com/avatar/${hash.toString()}?d=404`
}
