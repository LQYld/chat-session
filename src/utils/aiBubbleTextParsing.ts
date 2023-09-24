export default (str) => {
  const strArray = str.split('``')
  const regex = /`(.*?)`/g
  // const matches = str.match(regex);
  const newStrMap = strArray.map((item) => {
    if (regex.test(item)) {
      const codeRegex = /`(.*?)`/g
      let match
      const code = ''
      while ((match = codeRegex.exec(item)) !== null) {
        const splitStr = str.split(' ')
        const language = splitStr[0]
        const result = splitStr.slice(1).join(' ')
        return {
          type: 'code',
          language: language,
          value: result
        }
      }
    }
    return {
      type: 'text',
      value: item
    }
  })
  console.log(newStrMap, 'newStrMap')
  return newStrMap
}
