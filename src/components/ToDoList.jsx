import { ThemeContext } from "../contexts/ThemeContext";
import { useContext, useState } from "react";
import { TodoListContext } from "../contexts/TodoListContext";

const ToDoList = () => {
    const {isDarkTheme, darkTheme, lightTheme, changeTheme} = useContext(ThemeContext);
    const {todos, dispatch} = useContext(TodoListContext);
    const theme = isDarkTheme ? darkTheme : lightTheme;
    const [todo, setTodo] = useState('');

    const handleFormSubmit = e => {
        e.preventDefault();
        dispatch({type: 'add', text: todo});
    }

    return (
        <div style={{background: theme.background, color: theme.text}}>
            {todos.length ? (todos.map(todo => {
                return <p id={todo.id} onClick={() => dispatch({type: 'remove', id: todo.id})} className='item'
                          key={todo.id}>
                    {todo.text}
                </p>
            })) : <p>No todos</p>}
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="todo">
                    Add todo:
                </label>
                <input type="text" id='todo' onChange={e => setTodo(e.target.value)}/>
                <input type="submit" className="ui button primary" style={{marginRight: 4 + 'px'}} value='Add new'/>
            </form>
            <button className='ui button primary' onClick={changeTheme}>
                Change The Theme
            </button>
        </div>
    )
}

export default ToDoList;