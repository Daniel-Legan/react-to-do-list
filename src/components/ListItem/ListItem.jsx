import { useDispatch } from 'react-redux';
import React, { useState } from 'react';

function ListItem({ item }) {
    const dispatch = useDispatch();
    const [selectedItem, setSelectedItem] = useState(null);
    const [editedItem, setEditedItem] = useState(null);


    const handleEdit = (item) => {
        setSelectedItem(item);
        setEditedItem({ ...item });
    };

    const handleChange = (event) => {
        setEditedItem({
            ...editedItem,
            [event.target.name]: event.target.value
        });
    };

    const handleSave = () => {
        dispatch({
            type: 'EDIT_DESCRIPTION',
            payload: editedItem
        });

        setSelectedItem(null);
        setEditedItem(null);
    };

    return (
        <li key={item.id}>
            {item === selectedItem ? (
                <>
                    <input
                        type="text"
                        name="description"
                        value={editedItem.description}
                        onChange={handleChange}
                    />
                    <button onClick={handleSave}>Save</button>
                </>
            ) : (
                <>
                    {item.description}
                    <button
                        onClick={() => handleEdit(item)}>Edit</button>
                    <button
                        onClick={() => { dispatch({ type: 'DELETE_ITEM', payload: item.id }) }}>Delete</button>
                </>
            )}
        </li>
    )
}

export default ListItem;