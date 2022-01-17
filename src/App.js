import { Provider,useDispatch } from 'react-redux'
import { store } from './store/store';
import './App.css';
import { Prueba } from './components/Prueba/Prueba';
import { handleAuthorization } from './actions/authAction';

export const App = () => {

  const initialState = {
    password: '',
    nombre:''
  }
  const dispatch = useDispatch();
  dispatch(handleAuthorization(initialState.password,initialState.nombre))

  return (
    <div className="App">
      <Provider store= {store} >
        <Prueba />
      </Provider>
    </div>
  );
}

