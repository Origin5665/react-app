import { CheckBox } from '@material-ui/icons';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import { ComponentInput } from '../common/FormControls/FormControls';
import '../Settings/Settings.module.css';
import style from '../Settings/Settings.module.css'
import { updateUserProfileData } from './../../redux/thunk/updateUserProfileData'
import { getUserProfileCreator } from './../../redux/thunk/getUserProfileCreator'

const Settings = (props) => {

   console.log(props);
   const history = useHistory()

   const backToProfile = () => {
      history.push('/profile')
   }


   return (

      <div className={style.settings__wrapper}>
         <button onClick={backToProfile}>Вернуться к профилю</button>
         <h2>Настройки профиля</h2>
         <form onSubmit={props.handleSubmit} >
            {/* Имя */}
            <label htmlFor={'name'}>Полное имя:
                <Field
                  component={ComponentInput}
                  type={'text'}
                  name={'fullName'}
                  typeField="input"
                  placeholder="Полное имя"
               ></Field></label>
            {/* Checkbox */}
            <label htmlFor={'work'}>Работа:
                <Field
                  component={ComponentInput}
                  type={'checkbox'}
                  name={'lookingForAJob'}
                  typeField="input"

               ></Field></label>
            {/* Описание работы */}
            <label htmlFor={'work-discription'}>Место работы:
                <Field
                  component={ComponentInput}
                  placeholder="Место работы"
                  rows={3}
                  name={'lookingForAJobDescription'}
                  typeField="textaria"

               ></Field></label>
            {/* Aboute Me */}
            <label htmlFor={'aboutMe'}>О себе:
                <Field
                  component={ComponentInput}
                  placeholder="Расскажите о себе"
                  rows={5}
                  name={'aboutMe'}
                  typeField="textaria"

               >
               </Field></label>
            {/* Contacts */}

            {Object.keys(props.profile.contacts).map(key => {
               return <div><label key={key} htmlFor={'key'}>
                  {key[0].toUpperCase() + key.slice(1)}:
    <Field component={ComponentInput}
                     type={'text'}
                     name={'contacts.' + key}
                     typeField="input"
                     placeholder={`Ваш ${key}`}>
                  </Field>
               </label>
                  <span >{props.error ? props.error : 'тут будет ошибка'}</span>
               </div>
            })}



            {/* * <label htmlFor={'github'}>GitHub:
                <Field
                        component={ComponentInput}
                        type={'text'}
                        name={'contacts.github'}
                        typeField="input"
                        placeholder="Аккаунт GitHub"
                    ></Field></label>
                <label htmlFor={'telegram'}>telegram:
                <Field
                        component={ComponentInput}
                        type={'text'}
                        name={'telegram'}
                        typeField="input"
                        placeholder="Аккаунт Telegram"
                    ></Field></label>
                <label htmlFor={'vk'}>Вконтакте:
                <Field
                        component={ComponentInput}
                        type={'text'}
                        name={'vk'}
                        typeField="input"
                        placeholder="Аккаунт Вконтакте"
                    ></Field></label>
                <label htmlFor={'twitter'}>Twitter:
                <Field
                        component={ComponentInput}
                        type={'text'}
                        name={'twitter'}
                        typeField="input"
                        placeholder="Аккаунт Twitter"
                    ></Field></label>
                <label htmlFor={'youtube'}>YouTube:
                <Field
                        component={ComponentInput}
                        type={'text'}
                        name={'youtube'}
                        typeField="input"
                        placeholder="Аккаунт YouTube"
                    ></Field></label>

                <label htmlFor={'facebook'}>Facebook:
                <Field
                        component={ComponentInput}
                        type={'text'}
                        name={'facebook'}
                        typeField="input"
                        placeholder="Аккаунт Facebook"
                    ></Field></label>

                <label htmlFor={'website'}>Веб-сайт:
                <Field
                        component={ComponentInput}
                        type={'text'}
                        name={'website'}
                        typeField="input"
                        placeholder="Веб-сайт"
                    ></Field></label>

                <label htmlFor={'instagram'}>Instagram:
                <Field
                        component={ComponentInput}
                        type={'text'}
                        name={'instagram'}
                        typeField="input"
                        placeholder="Аккаунт Instagram"
                    ></Field></label> */}
            <button>Сохранить</button>
         </form>
      </div>
   )
};
const SettingReduxForm = reduxForm({ form: 'edit-profile' })(Settings)


const EditForm = ({ data, updateUserProfileData }) => {
   console.log(data);





   const history = useHistory()

   const onSubmitEditProfile = async (formData) => {

      try {
         await updateUserProfileData(formData)
         history.push('/profile')
      } catch (error) {
         console.log(error);
      }

      // updateUserProfileData(formData)
      //    .then(() => {
      //       history.push('/profile')
      //    })

      // history.push('/profile')



   }
   if (!data) return <Redirect to='/profile' />

   return <SettingReduxForm initialValues={data} profile={data} data onSubmit={onSubmitEditProfile} />
}

const mapState = (state) => ({
   data: state.profile.profileUser
})


// в форме ошибка при await падала, потому что ты возвращал Promise.reject и во вне не обернул это try/catch, из-за чего скрипт падает с ошибкой unhandledrejection


export default connect(mapState, { updateUserProfileData, getUserProfileCreator })(EditForm);