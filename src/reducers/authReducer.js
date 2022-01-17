import { types } from "../types/types";


export const authReducer = (state = {}, action) => {

    switch(action.type) {
    case types.login :
        return {
            nombre:action.payload.nombre,
            password: action.payload.password
        };

    case types.logout:
        return {};

    default:
        return  state;
}

}