import React from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { AuthContext } from "../contexts/AuthContext";

export default class ToDoList extends React.Component {
    render() {
        return (
            //*Consumer function component-də də işləyir.
            <AuthContext.Consumer>
                {(authContext) => (
                    <ThemeContext.Consumer>
                        {(themeContext) => {
                            const {isDarkTheme, darkTheme, lightTheme, changeTheme} = themeContext;
                            const {isLoggedIn, changeAuthStatus} = authContext;
                            const theme = isDarkTheme ? darkTheme : lightTheme;
                            return (
                                <div style={{background: theme.background, color: theme.text}}>
                                    <p onClick={changeAuthStatus}>
                                        {isLoggedIn ? 'Logged In' : 'Logged Out'}
                                    </p>
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
                )}
            </AuthContext.Consumer>
        )
    }
}