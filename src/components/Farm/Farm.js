import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addAnimalAction } from '../../actions/addAnimalAction'


export const Farm = () => {

    const dispatch = useDispatch();
    const [animal, setAnimal] = useState('');
    const getAnimal= (e) => setAnimal(e.target.value); 
    console.log(animal)
    const incrementFarm=  () => dispatch(addAnimalAction(animal));
      
    return (
        <>
            <label htmlFor='animal'>Añade un animal</label>
            <input type= 'text' onChange={getAnimal} />
            <button onClick={incrementFarm}> Añadir</button>
        </>
    )
}
