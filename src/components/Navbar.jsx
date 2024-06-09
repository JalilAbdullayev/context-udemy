import { ThemeContext } from "../contexts/ThemeContext";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

const Navbar = () => {
    const {isDarkTheme, darkTheme, lightTheme} = useContext(ThemeContext);
    const {isLoggedIn, changeAuthStatus} = useContext(AuthContext);
    const theme = isDarkTheme ? darkTheme : lightTheme;
    return (
        <nav style={{background: theme.background, height: 120 + 'px'}}>
            <h2 className='ui centered header' style={{color: theme.text}}>
                Title
            </h2>
            <p onClick={changeAuthStatus} style={{color: theme.text}}>
                {isLoggedIn ? 'Logged In' : 'Logged Out'}
            </p>
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

export default Navbar;