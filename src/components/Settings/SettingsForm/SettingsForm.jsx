import React from 'react'
import { Field, reduxForm } from 'redux-form';
import { ComponentInput } from '../../common/FormControls/FormControls';
import styles from './SettingsForm.module.css';
import { useHistory, Redirect } from 'react-router-dom'


const SettingsForm = (props) => {

   return (
      <form onSubmit={props.handleSubmit} className={styles.settings__form} >
         <h2>Данные профиля:</h2>
         {/* Имя */}
         <label className={styles.form__label} htmlFor={'name'}>Полное имя:
         </label>
         <Field
            className={styles.form__input}
            component={ComponentInput}
            type={'text'}
            name={'fullName'}
            typeField="input"
            placeholder="Полное имя"
         ></Field>
         {/* Checkbox */}
         <label className={styles.form__label} htmlFor={'work'}>В поиске работы:
          <Field
               component={ComponentInput}
               type={'checkbox'}
               name={'lookingForAJob'}
               typeField="input"

            ></Field></label>
         {/* Описание работы */}
         <label className={styles.form__label} htmlFor={'work-discription'}>Место работы:
          </label>
         <Field
            className={styles.form__textAria}
            component={ComponentInput}
            placeholder="Место работы"
            rows={3}
            name={'lookingForAJobDescription'}
            typeField="textaria"
         ></Field>

         {/* Aboute Me */}

         <label className={styles.form__label} htmlFor={'aboutMe'}>О себе:
         </label>
         <Field
            className={styles.form__textAria}
            component={ComponentInput}
            placeholder="Расскажите о себе"
            rows={4}
            name={'aboutMe'}
            typeField="textaria"
         >
         </Field>

         {/* Contacts */}

         <h3>Ваши контакты:</h3>
         {Object.keys(props.profileData.contacts).map(key => {
            return <div className={styles.form__wrapperContacts} key={key}><label htmlFor={'key'}>
               {key[0].toUpperCase() + key.slice(1)}:
            </label>
               <Field className={styles.form__input} component={ComponentInput}
                  type={'text'}
                  name={'contacts.' + key}
                  typeField="input"
                  placeholder={`Ваш ${key}`}>
               </Field>
            </div>
         })}
         <button>Сохранить</button>
      </form>
   )
}

const SettingReduxForm = reduxForm({ form: 'edit-profile' })(SettingsForm)


const EditForm = (props) => {

   const history = useHistory();

   const onSubmitEditProfile = async (formData) => {

      try {
         await props.userProfileUpdate(formData)
         history.push('/profile')
      } catch (error) {
         console.log(error)
      }

   }
   if (!props.profileData) return <Redirect to='/profile' />
   return <SettingReduxForm
      userProfileUpdate={props.userProfileUpdate}
      initialValues={props.profileData}
      profileData={props.profileData}
      onSubmit={onSubmitEditProfile} />
}


export default EditForm
