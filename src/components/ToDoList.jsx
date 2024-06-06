import React from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default class ToDoList extends React.Component {
    render() {
        return (
            //*Consumer function component-də də işləyir.
            <ThemeContext.Consumer>
                {(context) => {
                    const {isDarkTheme, darkTheme, lightTheme, changeTheme} = context;
                    const theme = isDarkTheme ? darkTheme : lightTheme;
                    return (
                        <div style={{background: theme.background, color: theme.text, height: 120 + 'px'}}>
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
                }}
            </ThemeContext.Consumer>
        )
    }
}