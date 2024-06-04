import { Component, createContext } from "react";

export const ThemeContext = createContext();

export default class ThemeContextProvider extends Component {
    state = {
        isDarkTheme: true,
        lightTheme: {
            text: '#222',
            background: 'D8DDF1'
        },
        darkTheme: {
            text: '#FFF',
            background: '#5C5C5C'
        }
    }

    render() {
        return (
            <ThemeContext.Provider value={{...this.state}}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}