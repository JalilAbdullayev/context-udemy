import { Component, createContext } from "react";

export const AuthContext = createContext();

export default class AuthContextProvider extends Component {
    state = {
        isLoggedIn: false
    }

    changeAuthStatus = () => {
        this.setState({isLoggedIn: !this.state.isLoggedIn});
    }

    render() {
        return (
            <AuthContext.Provider value={{...this.state, changeAuthStatus: this.changeAuthStatus}}>
                {this.props.children}
            </AuthContext.Provider>
        );
    }
}