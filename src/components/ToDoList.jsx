import { ThemeContext } from "../contexts/ThemeContext";
import { useContext } from "react";
import { TodoListContext } from "../contexts/TodoListContext";

const ToDoList = () => {
    const {isDarkTheme, darkTheme, lightTheme, changeTheme} = useContext(ThemeContext);
    const {todos} = useContext(TodoListContext);
    const theme = isDarkTheme ? darkTheme : lightTheme;

    return (
        <div style={{background: theme.background, color: theme.text}}>
            {todos.length ? (todos.map(todo => {
                return <p className='item' key={todo.id}>
                    {todo.text}
                </p>
            })) : <p>No todos</p>}
            <button className='ui button primary' onClick={changeTheme}>
                Change The Theme
            </button>
        </div>
    )
}

export default ToDoList;