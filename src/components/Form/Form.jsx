import React, { useState} from 'react';
import { useDispatch } from 'react-redux';

function Form() {

    const [description, setDescription] = useState('');
    const dispatch = useDispatch();

    function handleSubmit(event) {
        event.preventDefault();

        dispatch({
            type: 'ADD_DESCRIPTION',
            payload: {
                description: description
            }
        });

        setDescription('');
    }

    return (
        <form
            action=""
            onSubmit={handleSubmit}
        >
            <input
                type="text"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            />
            <button>Add</button>
        </form>
    )
}

export default Form;