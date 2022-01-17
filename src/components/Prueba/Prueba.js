import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { handleAuthorization } from '../../actions/authAction';

export const Prueba = () => {

    const initialState = {
    password: '123',
    nombre:'dani'
  }
  const dispatch = useDispatch();
  dispatch(handleAuthorization(initialState.password,initialState.nombre))


    const password = useSelector(state => state.authorization.password)
    const name= useSelector(state => state.authorization.nombre)
    // useSelector es un hook donde hay que definiir una función
    //en esta función vamos a recibir un argumento state y devolvemos la propiedad del state que queramos
    // realmente estamos accediendo al store y dentro del store a los reducers

    return(
        <>
        
        <h1>Bienvenido {name}</h1>
        <h2>La contraseña es: {password}</h2>
        </>
    )
}