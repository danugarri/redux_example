import { types } from "../types/types";


export const addAnimalReducer = (state= '',action) => {

    switch(action.type) {
        case types.farm:
            return [...state,action.payload.newAnimal]
            ;
        default:
            return state;
    }
}