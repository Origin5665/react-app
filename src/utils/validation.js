export const requaredField = (value) => {

   if (value) {

      return undefined

   } else {

      return 'Обязательное поле!'
   }
}



export const maxLengthCreator = (max) => (value) => {
   if (value.length >= max) {
      return 'Поле выше установленной длинны'
   } else {
      return undefined
   }
}