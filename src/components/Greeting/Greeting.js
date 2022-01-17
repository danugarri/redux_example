import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { handleAuthorization } from '../../actions/authAction';

export const Greeting = ({pass,name}) => {


  const dispatch = useDispatch();
  dispatch(handleAuthorization(pass,name))


    const password = useSelector(state => state.authorization.password)
    const userName= useSelector(state => state.authorization.nombre)


    return(
        <>
        
        <h1>Bienvenido {userName} </h1>
        <h2>La contraseña es: {password}</h2>
        </>
    )
}