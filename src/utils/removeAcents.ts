const removeAcents = (text: string) => {
  let formated = text
  formated = formated.toLowerCase()
  formated = formated.replace(new RegExp('[ÁÀÂÃ]', 'gi'), 'a')
  formated = formated.replace(new RegExp('[ÉÈÊ]', 'gi'), 'e')
  formated = formated.replace(new RegExp('[ÍÌÎ]', 'gi'), 'i')
  formated = formated.replace(new RegExp('[ÓÒÔÕ]', 'gi'), 'o')
  formated = formated.replace(new RegExp('[ÚÙÛ]', 'gi'), 'u')
  formated = formated.replace(new RegExp('[Ç]', 'gi'), 'c')
  return formated
}
export { removeAcents }
