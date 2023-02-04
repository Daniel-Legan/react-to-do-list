import { useDispatch } from 'react-redux';

function ListItem({ item }) {
    const dispatch = useDispatch();
    return (
        <li>
            {item.description}
            <button
                onClick={() => { dispatch({ type: 'DELETE_ITEM', payload: item.id }) }}
            >
                delete
            </button>
        </li>
    )
}

export default ListItem;