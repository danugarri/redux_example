import {createStore,combineReducers} from 'redux';
import { addAnimalReducer } from '../reducers/addAnimalReducer';
import { authReducer } from '../reducers/authReducer';


// aquí podremos meter todos los reducers que queramos
const reducers= combineReducers(
    {
        authorization: authReducer,
        farm: addAnimalReducer
    }
)
export const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);