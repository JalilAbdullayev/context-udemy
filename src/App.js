import Navbar from "./Components/Navbar";
import ToDoList from "./Components/ToDoList";

function App() {
    return (
        <div className="App">
            <div className="ui raised very padded text container segment">
                <Navbar/>
                <ToDoList/>
            </div>
        </div>
    );
}

export default App;
