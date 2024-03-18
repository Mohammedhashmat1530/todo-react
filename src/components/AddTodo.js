import React,{useState,useContext} from 'react';
import { GlobalContext } from '../context/globalstate';



export const AddTodo = () => {
    const [text,setText] = useState('');
    const { add } = useContext(GlobalContext);

    const Submit = (e) => {
        e.preventDefault();
         
     
         const NewList={
             id:Math.floor(Math.random*100000),
             text
         }
     console.log(NewList)
         add(NewList)
     }
     
    return (
        <>
            <div className='todo-input'>
               
                <input type="text" onChange={(e)=>setText(e.target.value)} placeholder='Enter Todo here ....'/>
                <button type="submit" onClick={Submit}>Enter</button>
               
            </div>
        </>
    )
}


