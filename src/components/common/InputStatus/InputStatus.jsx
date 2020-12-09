import React from 'react'
import styles from './InputStatus.module.css';
import classnames from 'classnames'


const InputStatus = ({ status, userStatusUpdate, statusEditToggle }) => {
   React.useEffect(() => { setValue(status) }, [status]);

   const [value, setValue] = React.useState(status);

   const submitStatement = (e) => {
      e.preventDefault()
      userStatusUpdate(value)
      statusEditToggle()
   };

   return (
      <form>
         <input
            className={styles.status__input}
            placeholder={"Новый статус..."}
            autoFocus={true}
            maxLength={30}
            value={value}
            onChange={e => setValue(e.target.value)}
         />
         <button
            className={classnames(styles.status__button, styles.status__button_add)}
            onClick={submitStatement}>Обновить</button>
         <button
            className={classnames(styles.status__button, styles.status__button_off)}
            onClick={statusEditToggle}>Закрыть</button>
      </form>
   )
}

export default InputStatus
