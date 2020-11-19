import React, { Fragment } from 'react';
import FormTextaria from './FormTextaria.module.css';


const FormContructor = (props) => {

   return (
      <Fragment>
         {props.children}
         <span className={FormTextaria.form__error}>
            {props.meta.submitFailed ? props.meta.error : ''}
         </span>
      </Fragment>
   )
}


export const ComponentInput = (props) => {

   const { input, meta, typeField, ...restProps } = props;
   return (
      <FormContructor {...props} >{typeField === 'input'
         ? <input{...restProps}  {...input} />
         : <textarea{...restProps}  {...input} />}</FormContructor>

   )

};
