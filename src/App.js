import { Provider} from 'react-redux'
import { store } from './store/store';
import './App.css';
import { Prueba } from './components/Prueba/Prueba';


export const App = () => {

  
  return (
    <div className="App">
      <Provider store= {store} >
        <Prueba />
      </Provider>
    </div>
  );
}

