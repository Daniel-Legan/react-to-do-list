import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ListItem from '../ListItem/ListItem';

function List() {
    const dispatch = useDispatch();
    const list = useSelector((store) => store.list);
    const searchTerm = useSelector((store) => store.searchTerm);

    useEffect(() => {
        dispatch({ type: 'FETCH_LIST' });
    }, []);

    return (
        <main>
            <h1>List</h1>
            <section>
                {list.map(item => {
                    return (
                        <ListItem key={item.id} item={item} />
                    )
                })}
            </section>
        </main>
    );
}

export default List;