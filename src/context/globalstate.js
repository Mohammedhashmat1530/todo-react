import React, { createContext, useReducer } from 'react'
import Appreducer from './Appreducer';

const initalState = {
    list: [
        { id: 1, text: 'Build TODO application' },
        { id: 2, text: 'Learn Custom Hooks' },
        { id: 3, text: 'Socialize on Twitter' },
        { id: 4, text: 'watch movie' }
    ]
}

//create context
export const GlobalContext = createContext(initalState);

//provider component
export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(Appreducer, initalState);
    
        function delete_list(id){
          dispatch({
            type:"DELETE_LIST",
            payload:id,
          })
        }
    
    function add(transaction) {
        dispatch({
            type: 'ADD_LIST',
            payload: transaction,
        })
    }

    return <GlobalContext.Provider value={{
        TodoList: state.list,
        add,
        delete_list
    }}>
        {children}

    </GlobalContext.Provider>
}