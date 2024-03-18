import React, { useContext } from 'react'
import { GlobalContext } from '../context/globalstate';

export const List = ({ list }) => {
    const { delete_list } = useContext(GlobalContext)
    const del = (e) => {
        e.preventDefault();
        delete_list(list.id)
        console.log(list.id)
    }

    return (
        <li className='list'>{list.text}<button onClick={del} className="del-btn" type="delete">Delete</button></li>
    )
}