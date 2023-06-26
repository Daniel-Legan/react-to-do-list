import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function SearchBar() {
    const dispatch = useDispatch();
    // const list = useSelector((store) => store.list);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        dispatch({
            type: 'SET_SEARCH_TERM',
            payload: event.target.value
        });
    };


    return (
        <div>
            <h1>Search Bar</h1>
            <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Search..." />
        </div>
    )
}

export default SearchBar;