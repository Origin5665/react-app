import React from 'react';
import ContextStore from '../../ContextStore';
import DialogsBundle from '../Dialogs/Dialogs.module.css';
import DialogsItem from '../Dialogs/DialogsItem/DialogsItem';
import DialogBlockContainer from './DialogBlock/DialogBlockContainer';

const Dialogs = () => {
  return (
    <ContextStore.Consumer>
      {
        (store) => {
          const users = store.getState().user.dialog.map((item, i) =>
            <DialogsItem key={i} name={item.name} id={item.id} photo={item.image} />)
          return (
            <div className={DialogsBundle.dialogs__wrapper}>
              <div className={DialogsBundle.dialogs__block}>
                <ul className={DialogsBundle.dialogs__list}>
                  {users}
                </ul>
                <div className="dialog__wrapper">
                  <h2 className={DialogsBundle.dialogs__title}>Диалог</h2>
                  <div className={DialogsBundle.dialog}>
                    <DialogBlockContainer />
                  </div>
                </div>
              </div>
            </div>
          )
        }
      }
    </ContextStore.Consumer>
  )
};
export default Dialogs;