import { useState } from 'react'

export function useFormWithValidation(initialValues = {}, validationConfig) {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [isValid, setIsValid] = useState(false)

  const handleChange = (event) => {
    const target = event.target
    const name = target.name
    const value = target.value
    let isValidRegEx = true

    setValues({ ...values, [name]: value })
    setErrors({ ...errors, [name]: target.validationMessage })

    if (validationConfig) {
      const { regEx, message } = validationConfig
      if (name in regEx && name in message && value) {
        isValidRegEx = regEx[name].test(value)
        setErrors({ ...errors, [name]: isValidRegEx ? '' : message[name] })
      }
    }

    setIsValid(target.closest('form').checkValidity() && isValidRegEx)
  }

  return { values, handleChange, errors, isValid }
}
