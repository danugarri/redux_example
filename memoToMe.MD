## REDUX ##
 Como un patrón de diseño

la información fluye en un solo sentido
Se genera como una especie de contenedor
que es el --> ## store ##

*Cuenta con reducers
nos permiten manejar la información del store
y lo hace a través de acciones

*Estas acciones se ejecutan a través de
dispatch()

---------------------------
## PASOS ##

1. bis. 

--> hacer un npm i react-redux
y
--> npm i redux
//también se puede hacer directamente así:

npm i react-redux redux

necesitamos tener la librería de redux en el proyecto

1. En src

# creamos una carpeta que se llame reducers

1. 2 creamos un fichero para manejar el store
por ejemplo con  un estado relacionado con la autenticación

ej creamos 
authReducer.js

1. 3 Montamos la estructura de nuestro reducer
# Esta es la estructura que debe de tener todo reducer

export const authReducer = (state = {}, action) => {
}


1. 4  Dentro del reducer hacemos un switch

// aquí gestionamos los tipos de acción


switch(action.type) {
    case types.login:
        return {
            login:action.payload.login,
            password: action.payload.password
        };

    case types.logout:
        return {};

    default:
        return state
}

// este switch debe ir dentro del AuthReducer.js

1. 4 en src

# creamos una carpeta types

--> aquí añadiremos todos los tipos de acciones

1. 5 creamos fichero types.js

export const types = {
    login: '[Auth] login',
    logout: '[Auth] logout'
}

//dentro de types iremos añadiendo los que sean necesarios
***************************
a nivel de organización

en types.js

ej

[Auth] login

[AdministracionGlobal] accion
Lo que va entre corchetes serán los modulos
principales que usemos
*****************************
2. En src

2. 1 crear carpeta store y fichero store.js

//aquí tendremos toda la información

import {createStore,combineReducers} from 'redux';

export const store = createStore();
// como parámetro le podemos pasar el state inicial


2. 2 crear variable reducers que recibirá createStore

#  debemos importar combineReducers  from redux
import {createStore,combineReducers} from 'redux';

const reducers = combineReducers(
    {
        auth: AuthReducer
    }
);
## junto a auth podremos crear tantas propiedades como queramos. Esas propiedades tendrán como valor los reducers que creemos

2. 3 Ahora le pasamos esta variable como parámetro a createStore()


export const store = createStore(reducers);

# Quedaría así:

import {CreateStore} from 'react-redux';


const reducers = combineReducers(
    {
        auth: AuthReducer
    }
);
export const store = CreateStore(reducers);

######
// dice oscar de entrar en la web
// Redux devTools-extension
// vamos a utilizar una característica que tienen en un repo de github

# window._REDUX_DEVTOOLS_EXTENSION_&& window._REDUX_DEVTOOLS_EXTENSION_()

Esto hay qye meterlo dentro del createStore

export const store = CreateStore(
reducers,
window._REDUX_DEVTOOLS_EXTENSION_&& window._REDUX_DEVTOOLS_EXTENSION_()
);

3. En App.js
pasar el store a <App /> o donde queramos utilizarlo

3. 1 importar Provider

import {Provider} from 'react-redux';

3.2
envolvemos App con el Provider

<Provider store= {store}>
<App />
</Provider>

3. 3
En google chrome
Dentro de la herramienta de desarrolladores
en components
si nos metemos en el Provider vemos
todas las funciones que se pueden usar
ej suscribe(),getState(),dispatch()

3. 4
crear acción/ action

Dentro de src

# creamos carpeta action 
con fichero para cada acción
ej auth.js (nuestra acción que controla la autenticación)

3.4.1

en auth.js

import {types} from '..'

# para cada acción necesitaremos una función que se llamará luego con useDispatch()

### estas funciones realizan acciones que van a tener siempre 2 propiedades type y payload
// ej actionLogin = {
        type: types.login,
        payload: {
            login,
            password
        }
}


export const login = (login,password) => {
    return (
        // el objeto de dentro es nuestra acción
        {
        type: types.login,
        payload: {
            login,
            password
        }
        }
    )
}

4. Usar dispatch();

# En el fichero donde usemos el Provider

import {useDispatch} from 'react-redux';

//estado inicial
4. 1.bis Creamos un estado inicial
const initForm = {
name: '',
email:''
}
4. 1.ter creamos variable dispatch

const dispatch = useDispatch();

4.1 usamos el dispatch
//name y email son los del estado inicial
 
dispatch(login(name,email));

5. recuperar los valores del store
# debemos importar useSelector() de react-redux

import {useSelector} from 'react-redux';

se hace con useSelector();
const loggin = useSelector(state.auth.login);

//con lo anterior estoy accediendo a la propiedad login
////////////////////////////////////
## Ficheros finales ##
1. el fichero store

import {createStore, combineReducers} from 'redux';
import { AuthReducer } from '../reducers/AuthReducer';

//el contenedor 

const reducers = combineReducers({
    auth: AuthReducer
})


export const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    
    ); //aquí se inicializa el store
///////////////////////
2.fichero App.js , o donde queramos usar el store

import './App.css';
import {Provider} from 'react-redux';
import { store } from './store/store';
import { ComponentePrueba } from './components/CompenentePrueba';





  return (
    <div className="App">
      <h1>Aplicación de prueba</h1>
        <Provider store={store}>
          <ComponentePrueba />
        </Provider>
    </div>
  );
}

export default App;
////////////////
3. ComponentePrueba.js

import { useSelector } from "react-redux"



export const ComponentePrueba = () => {

    const login = useSelector(state => state.auth.login)


    return(
        <>
        <h1>Soy un componente de prueba</h1>
        <hr />
        {login}
        </>
    )
}

//////////////////////////////
4. carpeta actions

accion prueba: auth.js

import { types } from "../types/types"

export const login = (login, password, logged)  => {
    return (
        {
            type: types.login,
            payLoad: {
                login,
                password,
                logged

            }
        }
    )
}

//////////////////////////////////////
5. carpeta types 
fichero types.js

export const types = {
    login: '[Auth] login',
    logout: '[Auth] logout' 
}
//////////////////////////////////

6. carpeta reducers

fichero reducer ejemplo: AuthReducer.js

//los reducers son funciones que gestionan el estado

import {types} from '../types/types'



export const AuthReducer = (state = {}, action) => { //siempre que creemos un reducer tendrá este formato
    switch ((action.type)) { //aquí definimos los tipos de acción
        case types.login:  //el caso lo tenemos definido en la carpeta Types
            return {
                login: action.payLoad.login,
                password: action.payLoad.password,
                logged: action.payLoad.logged ? false : true
            }

        case types.logout:  //el caso lo tenemos definido en la carpeta Types
            return {}

        default:
            return state;
    }
}



