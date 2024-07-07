import { createContext, useReducer } from "react";
import { toDosReducer } from "../reducers/ToDosReducer";

export const TodoListContext = createContext();

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