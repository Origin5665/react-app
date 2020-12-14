export type fieldType = (value: string) => string | undefined

export const requaredField: fieldType = (value) => {

   if (!(/^\s*$/).test(value) && value) {
      return undefined
   } else {
      return 'Пустое сообщение...'
   }
}



export const maxLengthCreator = (max: number): fieldType => (value) => {
   if (value.length >= max) {
      return 'Поле выше установленной длинны'
   } else {
      return undefined
   }
}