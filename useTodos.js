import { useEffect, useReducer, useState } from "react";
import { todoReducer } from "../08-useReducer/todoReducer"



const initialState = [];

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = () => {

    
    const [todoList, dispatch] = useReducer(todoReducer, initialState, init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todoList )) 
            
    }, [todoList])

    const handleNewTodo = (todo) => {
        // seteas la accion que se le va a enviar al reducer
        const action = ({
            type: '[TODO] Add Todo',
            payload: todo // payload es la data que vas a enviar
        })
        dispatch(action) // Dispara la accion como se configuro arriba
    }

    const handleDeleteTodo = (id) => {

        const action = ({
            type: '[TODO] Remove Todo',
            payload: id // payload es la data que vas a enviar
        })
        dispatch(action) // Dispara la accion como se configuro arriba
    }

    const handleToggleTodo = (id) => {
        const action = ({
            type: '[TODO] Toggle Todo',
            payload: id
        })
        dispatch(action);

    }

    const todosCount = todoList.length;
    const pendingTodosCount = todoList.filter( todo => !todo.done).length;


    return [
        todoList,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todosCount,
        pendingTodosCount,
        ...todoList,
    ]
}




