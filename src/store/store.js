import {createStore,combineReducers} from 'redux';
import { authReducer } from '../reducers/authReducer';


// aquí podremos meter todos los reducers que queramos
const reducers= combineReducers(
    {
        authorization: authReducer
    }
)
export const store = createStore(
    reducers
);