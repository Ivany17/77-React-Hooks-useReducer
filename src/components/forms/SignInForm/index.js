import React from 'react';
import { Form, Formik } from 'formik';
import styles from './SignInForm.module.css';
import { SIGN_IN_SCHEMA } from '../../../utils/schemasValidation'
import InputWrapper from '../InputWrapper';

const initialValues = {
    email:'',
    password:''
}

const SignInForm = (props) => {
    return (
        <Formik initialValues={initialValues} onSubmit={props.onSubmit} validationSchema={SIGN_IN_SCHEMA}>
            {
                (formikProps) => {
                    return(
                        <Form>
                            <InputWrapper name='email' placeholder='Email' />
                            <InputWrapper name='password' type='password' placeholder='Password' />
                            <input type="submit" value='Sign in' />
                        </Form>
                    )
                }
            }
        </Formik>
    )
}

export default SignInForm;
