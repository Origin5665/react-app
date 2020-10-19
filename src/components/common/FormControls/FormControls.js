import React from 'react';
import FormTextaria from './FormTextaria.module.css';


const FormContructor = (props) => {

   const { input, meta, typeField, child, ...restProps } = props;
   return (
      <div>
         { props.children}
         <span className={FormTextaria.form__error}>
            {meta.touched && meta.error ? meta.error : ''}
         </span>
      </div>
   )
}


export const ComponentInput = (props) => {

   const { input, meta, typeField, child, ...restProps } = props;
   return (
      <FormContructor {...props} >{typeField === 'input'
         ? <input{...restProps}  {...input} />
         : <textarea{...restProps}  {...input} />}</FormContructor>

   )

};

// export const Input = (props) => {
//    const { input, meta, child, ...restProps } = props;
//    return (
//       <FormContructor{...props}><input {...restProps} {...input} /></FormContructor>
//    )
// };
