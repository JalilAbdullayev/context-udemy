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
    return (
        <TodoListContext.Provider value={{todos}}>
            {children}
        </TodoListContext.Provider>
    )
}

export default ToDoListContextProvider;