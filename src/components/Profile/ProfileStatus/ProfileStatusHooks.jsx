import React, { useState, useEffect } from 'react';
import style from './ProfileStatus.module.css';

const ProfileStatusHooks = ({ status, data, setStatus }) => {

   const [editMode, setEditMode] = useState(false);

   const [value, setValue] = useState(status)

   useEffect(() => { setValue(status) }, [status])

   const editStateOn = () => {
      setEditMode(true)
   }
   const editStateOff = () => {
      setEditMode(false)
   }

   const submitStatement = (e) => {

      e.preventDefault()
      debugger
      setStatus(value)
      editStateOff()
   }

   return (
      <div>
         { !editMode ? <p className={style.profileStatus__text} onDoubleClick={editStateOn}>{status}</p> : null}
         {editMode ? <form className={style.profileStatus__inputWrapper}>
            <input autoFocus={true}

               maxLength={30}
               className={style.profileStatus__input}
               value={value}

               onChange={e => setValue(e.target.value)}
            >

            </input>
            <button className={style.profileStatus__button + ' ' + style.profileStatus__buttonOn} onClick={submitStatement}></button>
            <button
               className={style.profileStatus__button + ' ' + style.profileStatus__buttonDel} onClick={editStateOff}></button>
         </form> : null}
      </div>
   )

};

export default ProfileStatusHooks;