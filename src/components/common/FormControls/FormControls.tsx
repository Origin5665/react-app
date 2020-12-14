import React, { Fragment } from 'react';
import { WrappedFieldInputProps, WrappedFieldMetaProps } from 'redux-form';
import FormTextaria from './FormTextaria.module.css';

type FormControlsType = {
   meta: WrappedFieldMetaProps
   typeField: string
   input: WrappedFieldInputProps

}

const FormContructor: React.FC<FormControlsType> = (props) => {

   return (
      <Fragment>
         {props.children}
         <span className={FormTextaria.form__error}>
            {props.meta.submitFailed ? props.meta.error : ''}
         </span>
      </Fragment>
   )
};

export const ComponentInput: React.FC<FormControlsType> = (props) => {

   const { input, meta, typeField, ...restProps } = props;
   return (
      <FormContructor {...props} >{typeField === 'input'
         ? <input {...restProps}  {...input} />
         : <textarea {...restProps}  {...input} />}
      </FormContructor>

   )

};
