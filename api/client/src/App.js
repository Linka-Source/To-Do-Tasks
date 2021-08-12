import { useEffect, useState } from 'react';
const api_base = 'http://localhost:3001';

function App() {
    const [todos, setTodos] = useState([]);
    const [popupActive, setPopupActive] = useState(false);
    const [newTodo, seNewTodo] = useState("");

    useEffect(() => {
        GetTodos();

        console.log(todos);
    }, [])

    const GetTodos = () => {
        fetch(api_base + "/todos")
            .then(res => res.json())
            .then(data => setTodos(data))
            .catch(err => console.error("Error: ", err));
    }

    const completeTodo = async id => {
        const data = fetch(api_base + "/todo/complete/" + id)
        .then(res => res.json());

        setTodos(todos => todos.map(todo => {
            if (todo._id === data.id) {
                todo.complte = data.complete;
            }

            return todo;
        }));

    }

	return (
        <div className="App">
            <h1>Welcome, PK</h1>
            <h4>Your Tasks</h4>

            <div className="todos">
                {todos.map(todo => (
                 <div className="todo " + (todo.complete ? "is-complete" : "") 
                } key={todo._id} onClick={() => completeTodo(todo.id)}>
                     <div className="checkbox"></div>

            <div className="text">{ todo.text}</div>

            <div className="delete-todo">x</div>

            </div>

                ))}

        </div>
    );

    }

    export default App;