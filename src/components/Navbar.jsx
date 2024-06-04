import React from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default class Navbar extends React.Component {
    static contextType = ThemeContext;

    render() {
        const {isDarkTheme, darkTheme, lightTheme} = this.context;
        const theme = isDarkTheme ? darkTheme : lightTheme;
        return (
            <nav style={{background: theme.background, height: 120 + 'px'}}>
                <h2 className='ui centered header' style={{color: theme.text}}>
                    Title
                </h2>
                <div className="ui three buttons">
                    <button className="ui button">
                        Overview
                    </button>
                    <button className="ui button">
                        Contact
                    </button>
                    <button className="ui button">
                        Support
                    </button>
                </div>
            </nav>
        )
    }
}