import { ThemeContext } from "../contexts/ThemeContext";
import { useContext } from "react";

const ToDoList = () => {
    const {isDarkTheme, darkTheme, lightTheme, changeTheme} = useContext(ThemeContext);
    const theme = isDarkTheme ? darkTheme : lightTheme;

    return (
        <div style={{background: theme.background, color: theme.text}}>
            <p className='item'>
                Plan the family trip
            </p>
            <p className='item'>
                Go shopping for dinner
            </p>
            <p className='item'>
                Go for a walk
            </p>
            <button className='ui button primary' onClick={changeTheme}>
                Change The Theme
            </button>
        </div>
    )
}

export default ToDoList;