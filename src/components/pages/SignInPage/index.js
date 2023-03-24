import React from 'react';
import SignInForm from '../../forms/SignInForm'

const SignInPage = () => {
    const onSubmit = (values, formikBag) => {
        formikBag.resetForm();
    }
    return (
        <div>
            <h2>Login to your account</h2>
            <SignInForm onSubmit={onSubmit} />
        </div>
    );
}

export default SignInPage;
