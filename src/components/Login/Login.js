import React from 'react';


export const Login = ({setName, setPass}) => {

    // const [credentials, setCredentials]= useState(
    //     {
    //         userName: '',
    //         userPassword: ''
    //     }
    // )
    const handleLogin = (e) => {
        e.preventDefault();
        const userNameInput= e.target.querySelector('input[name="userName"]').value;
        const userPasswordInput= e.target.querySelector('input[type="password"]').value;
        console.log(userNameInput)
        console.log(userPasswordInput)

        setName(userNameInput)
        setPass(userPasswordInput)
    
    }


    return (
        <>
            <form onSubmit= {handleLogin}>
                <label htmlFor='userName'>Nombre</label>
                <input type= 'text' name= 'userName' />
                <label htmlFor='password'>Contraseña</label>
                <input type= 'password' />
                <input type= 'submit' value= 'Login' />
            </form>
        </>
    )
}