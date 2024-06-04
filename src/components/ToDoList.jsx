import React from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default class ToDoList extends React.Component {
    static contextType = ThemeContext;

    render() {
        const {isDarkTheme, darkTheme, lightTheme} = this.context;
        const theme = isDarkTheme ? darkTheme : lightTheme;
        return (
            <div style={{background: theme.background, color: theme.text, height: 120 + 'px'}}>
                <p className='item'>
                    Plan the family trip
                </p>
                <p className='item'>
                    Go for shopping for dinner
                </p>
                <p className='item'>
                    Go for a walk
                </p>
            </div>
        )
    }
}