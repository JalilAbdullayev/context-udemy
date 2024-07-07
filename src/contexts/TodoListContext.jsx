import { createContext, useState } from "react";

export const TodoListContext = createContext();

const ToDoListContextProvider = ({children}) => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: 'Plan the family trip'
        },
        {
            id: 2,
            text: 'Go shopping for dinner'
        },
        {
            id: 3,
            text: 'Go for a walk'
        }
    ]);

    const addToDo = text => {
        setTodos([
            ...todos,
            {
                id: Math.random() * 1000,
                text
            }
        ]);
    }

    const removeToDo = id => {
        setTodos(todos.filter(todo => {
            return todo.id !== id
        }))
    }

    return (
        <TodoListContext.Provider value={{todos, addToDo, removeToDo}}>
            {children}
        </TodoListContext.Provider>
    )
}

export default ToDoListContextProvider;