import { ThemeContext } from "../contexts/ThemeContext";
import { useContext, useState } from "react";
import { TodoListContext } from "../contexts/TodoListContext";

const ToDoList = () => {
    const {isDarkTheme, darkTheme, lightTheme, changeTheme} = useContext(ThemeContext);
    const {todos, addToDo} = useContext(TodoListContext);
    const theme = isDarkTheme ? darkTheme : lightTheme;
    const [todo, setTodo] = useState('');

    const handleChange = e => {
        setTodo(e.target.value);
    }

    const handleFormSubmit = e => {
        e.preventDefault();
        addToDo(todo);
    }

    return (
        <div style={{background: theme.background, color: theme.text}}>
            {todos.length ? (todos.map(todo => {
                return <p className='item' key={todo.id}>
                    {todo.text}
                </p>
            })) : <p>No todos</p>}
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="todo">
                    Add todo:
                </label>
                <input type="text" id='todo' onChange={handleChange}/>
                <input type="submit" className="ui button primary" style={{marginRight: 4 + 'px'}} value='Add new'/>
            </form>
            <button className='ui button primary' onClick={changeTheme}>
                Change The Theme
            </button>
        </div>
    )
}

export default ToDoList;