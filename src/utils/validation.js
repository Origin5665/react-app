export const requaredField = (value) => {

   if (!(/^\s*$/).test(value) && value) {
      return undefined
   } else {
      return 'Пустое сообщение...'
   }
}



export const maxLengthCreator = (max) => (value) => {
   if (value.length >= max) {
      return 'Поле выше установленной длинны'
   } else {
      return undefined
   }
}