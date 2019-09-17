/**
 * Dynamically get the value of input via it's name attribute
 */
export const getInputValuesFromNameAttr = (e) => {
  return {
    [e.target.name]: e.target.value
  }
}

/**
 * Capitalise the first character of every word
 */
export const capitaliseFirstChar = (str) => {
  return str
    .toLowerCase()
    .split(' ')
    .map((x) => x[0].toUpperCase() + x.slice(1))
    .join(' ')
}
