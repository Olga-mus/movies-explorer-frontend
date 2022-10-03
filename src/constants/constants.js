export const emailRegex = RegExp(
    /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i
)

//export const nameRegex = RegExp(/^[А-ЯA-ZёәіңғүұқөһӘІҢҒҮҰҚӨҺ\h-]+$/umi)
export const nameRegex = RegExp(/^[a-zA-Zа-яёА-ЯЁ\-\s]\+$/)

// /[а-яё\s]/gi
// [A-Z]
// \s пробелы

// /[a-z, а-яё\-\s]/gi
