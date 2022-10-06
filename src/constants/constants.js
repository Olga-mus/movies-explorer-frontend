export const EMAIL_REGEX = /[^@\s]+@[^@\s]+\.[^@\s]+/i
export const NAME_REGEX = /^[a-zа-яё-\s]+$/i

export const loginValidationConfig = {
  regEx: {
    email: EMAIL_REGEX,
  },
  message: {
    email: 'Неверный формат email',
  },
}

export const registrationValidationConfig = {
  regEx: {
    name: NAME_REGEX,
    email: EMAIL_REGEX,
  },
  message: {
    name: 'Имя может состоять только из букв, пробелов и тире',
    email: 'Неверный формат email',
  },
}

export const COUNT_CARDS = {
  MAX: 12,
  MEDIUM: 8,
  MIN: 5,
}

export const COUNT_CARDS_ADD = {
  MAX: 3,
  MEDIUM: 2,
  MIN: 2,
}

export const SHORT_MOVIE_MIN = 40
