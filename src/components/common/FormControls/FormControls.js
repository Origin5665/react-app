import React from 'react';
import FormTextaria from './FormTextaria.module.css';


const FormContructor = ({ meta: { error, touched }, children }) => {
   return (
      <div>
         { children}
         <span className={FormTextaria.form__error}>
            {error && touched ? error : ''}
         </span>
      </div>
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
