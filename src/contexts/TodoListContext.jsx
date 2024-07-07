import { createContext, useReducer } from "react";

export const TodoListContext = createContext();

const toDosReducer = (state, action) => {
    switch(action.type) {
        case 'add':
            return [
                ...state, {
                    id: Math.random() * 1000,
                    text: action.text
                }
            ];
        case 'remove':
            return state.filter(todo => todo.id !== action.id);
        default:
            return state
    }
}

const ToDoListContextProvider = ({children}) => {
    const [todos, dispatch] = useReducer(toDosReducer, [{
        id: 1,
        text: 'Plan the family trip'
    }, {
        id: 2,
        text: 'Go shopping for dinner'
    }, {
        id: 3,
        text: 'Go for a walk'
    }]);

    return (
        <TodoListContext.Provider value={{todos, dispatch}}>
            {children}
        </TodoListContext.Provider>
    )
}

export default ToDoListContextProvider;