import { useEffect, useState } from 'react';
const api_base = 'http://localhost:3001';

function App() {
    const [todos, setTodos] = useState([]);
    const [popupActive, setPopupActive] = useState(false);
    const [newTodo, seNewTodo] = useState("");

    useEffect(() => {
        GetTodos();
    }, [])

    const GetTodos = () => {
        fetch
    }

	return (
        <div className="App">
            <h1>Welcome, PK</h1>
            <h4>Your Tasks</h4>

            <div className="todos">
                 <div className="todo">
                     <div className="checkbox"></div>

            <div className="text">Go shopping</div>

            <div className="delete-todo">x</div>

            </div>

                 <div className="todo-is-complete">
                     <div className="checkbox"></div>

            <div className="text">Do homework</div>

            <div className="delete-todo">x</div>

            </div>



        </div>
    </div>
    );

    }

    export default App;