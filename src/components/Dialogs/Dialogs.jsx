import React from 'react';

import DialogsItem from '../Dialogs/DialogsItem/DialogsItem';
import DialogBlockContainer from './DialogBlock/DialogBlockContainer';

const Dialogs = ({ data }) => {


  const users = data.map((item, i) =>
    <DialogsItem key={i} name={item.name} id={item.id} photo={item.image} />)

  return (
    <div >
      <div >

        <ul >
          <h3 >Диалоги:</h3>
          {users}
        </ul>
        <div >
          <h2 >Диалог</h2>
          <div >
            <DialogBlockContainer />
          </div>
        </div>
      </div>
    </div>
  )
};
export default Dialogs;