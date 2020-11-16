import React, { useState, useEffect } from 'react';


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
         { !editMode ? <p onDoubleClick={editStateOn}>{status}</p> : null}
         {editMode ? <form >
            <input autoFocus={true}

               maxLength={30}

               value={value}

               onChange={e => setValue(e.target.value)}
            >

            </input>
            <button onClick={submitStatement}></button>
            <button
               onClick={editStateOff}></button>
         </form> : null}
      </div>
   )

};

export default ProfileStatusHooks;