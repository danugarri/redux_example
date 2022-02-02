import React, {useState} from 'react';
import { Provider} from 'react-redux'
import { store } from './store/store';
import './App.css';
// import { Prueba } from './components/Prueba/Prueba';
import { Login } from './components/Login/Login';
import { Greeting } from './components/Greeting/Greeting';
import { Farm } from './components/Farm/Farm';


export const App = () => {

   const [name, setName]= useState('')
   const [pass,setPass]= useState('');
    


    
   
  
  return (
    <div className="App">
      <Provider store= {store} >
        {/* <Prueba /> */}
        <Login setName= {setName} setPass= {setPass}/>
        <Greeting name= {name} pass= {pass}/>
        <Farm />
      </Provider>
    </div>
  );
}

