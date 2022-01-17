import { types } from "../types/types";


export const handleAuthorization = (password, nombre) => {
    return (
        {
            type: types.login,
            payload: {
                nombre,
                password
            }
        }
    )
}