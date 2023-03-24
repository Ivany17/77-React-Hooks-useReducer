import React, { useState, useReducer } from 'react';
import reducer from './reducer';

// const SignUpForm = () => {
//     const [firstName, setFirstName] = useState('');
//     const [thurName, setThurName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [phone, setPhone] = useState('');
//     const [age, setAge] = useState(0);

//     const handlerFirstName = () => ({target:{value}}) => {setFirstName(value)};
//     const handlerLastName = () => ({target:{value}}) => {setThurName(value)};
//     const handlerEmail = () => ({target:{value}}) => {setEmail(value)};
//     const handlerPassword = () => ({target:{value}}) => {setPassword(value)};
//     const handlerPhone = () => ({target:{value}}) => {setPhone(value)};
//     const handlerAge = () => ({target:{value}}) => {setAge(value)};
//     return (
//         <div>
//             <h2>Sign up</h2> 
//                 <form>
//                     <input type='text' name='firstName' value={firstName} onChange={handlerFirstName} />
//                     <input type='text' name='thurName' value={thurName} onChange={handlerLastName} />
//                     <input type='email' name='email' value={email} onChange={handlerEmail} />
//                     <input type='text' name='password' value={password} onChange={handlerPassword} />
//                     <input type='text' name='phone' value={phone} onChange={handlerPhone} />
//                     <input type='number' name='age' value={age} onChange={handlerAge} />
//                 </form>    
//         </div>
//     );
// }

// export default SignUpForm;


//useReducer 

const SignUpForm = () => {
    const [state, dispatch] = useReducer(reducer, {
        firstName:'',
        thurName:'',
        email:'',
        password:'',
        phone:'',
        age:0
    });
    const handlerInput = ({target:{name, value}}) => {
        const action = {name, value};
        dispatch(action);
    }
    return (
        <div>
            <h2>Sign up</h2> 
                <form>
                    <input type='text' name='firstName' value={state.firstName} onChange={handlerInput} />
                    <input type='text' name='thurName' value={state.thurName} onChange={handlerInput} />
                    <input type='email' name='email' value={state.email} onChange={handlerInput} />
                    <input type='text' name='password' value={state.password} onChange={handlerInput} />
                    <input type='text' name='phone' value={state.phone} onChange={handlerInput} />
                    <input type='number' name='age' value={state.age} onChange={handlerInput} />
                </form>    
        </div>
    );
}

export default SignUpForm;