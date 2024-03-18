import React,{useContext} from 'react'
import { GlobalContext } from '../context/globalstate';
import { List } from './List';

export const TodoList = () => {

  const {TodoList} = useContext(GlobalContext);
  console.log(TodoList)
  return (
    <>
        <div className='todolist'>
                <ul>
                    {TodoList.map((list)=>(<List key={list.id} list={list}/>))}
                </ul>
                
            </div>
    </>
  )
}


