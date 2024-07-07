import Navbar from "./components/Navbar";
import ToDoList from "./components/ToDoList";
import ThemeContextProvider from "./contexts/ThemeContext";
import AuthContextProvider from "./contexts/AuthContext";
import ToDoListContextProvider from "./contexts/TodoListContext";

function App() {
    return (
        <div className="App">
            <div className="ui raised very padded text container segment">
                <AuthContextProvider>
                    <ThemeContextProvider>
                        <Navbar/>
                        <ToDoListContextProvider>
                            <ToDoList/>
                        </ToDoListContextProvider>
                    </ThemeContextProvider>
                </AuthContextProvider>
            </div>
        </div>
    );
}

export default App;
