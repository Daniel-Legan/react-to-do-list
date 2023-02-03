import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function List() {
    const dispatch = useDispatch();
    const list = useSelector((store) => store.list);

    useEffect(() => {
        dispatch({ type: 'FETCH_LIST' });
    }, []);

    return (
        <main>
            <h1>List</h1>
            <section>
                {list.map(item => {
                    return (
                        <div key={item.id}>
                            <p>{item.description}</p>
                        </div>
                    )
                })}
            </section>
        </main>
    );
}

export default List;