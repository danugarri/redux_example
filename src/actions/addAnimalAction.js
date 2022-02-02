import { types } from '../types/types'

export const addAnimalAction = (animal) => {

    return {
        type: types.farm,
        payload: {
            newAnimal: animal
        }
    }
}