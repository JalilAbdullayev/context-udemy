import Navbar from "./Components/Navbar";
import ToDoList from "./Components/ToDoList";
import ThemeContextProvider from "./Contexts/ThemeContext";

function App() {
    return (
        <div className="App">
            <div className="ui raised very padded text container segment">
                <ThemeContextProvider>
                    <Navbar/>
                    <ToDoList/>
                </ThemeContextProvider>
            </div>
        </div>
    );
}

export default App;
