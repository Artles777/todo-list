import React, {useEffect} from "react";
import TodoList from "./componets/TodoList";
import Context from "./componets/Context";
import Loader from "./Loader";
import Modal from "./Modal/Modal";

const FieldTodo = React.lazy(() => import('./componets/FieldTodo'))

function App() {
    const [todos, setTodos] = React.useState([])
    const [loading, setLoading] = React.useState(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then(response => response.json())
            .then(todos => setTimeout(() => {
                setTodos(todos)
                setLoading(false)
            },2000))
    }, [])
    
    function toggleTodo(id) {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    todo.completed =!todo.completed
                }
                return todo
            })
        )
    }

    function removeTodo(id) {
        setTodos(
            todos.filter(todo => todo.id !== id)
        )
    }
    
    function addTodo(title) {
        setTodos(todos.concat([{
            title,
            id: Math.random(),
            completed: false
        }]))
    }

    return (
        <Context.Provider value={{removeTodo}}>
            <div className='wrapper'>
                <h1 className="title">Todo List</h1>
                <Modal/>
                <React.Suspense fallback={<p>Loading...</p>}>
                    <FieldTodo onCreated={addTodo}/>
                </React.Suspense>
                {loading && <Loader/>}
                {todos.length
                    ? <TodoList todos={todos} toggleGoal={toggleTodo}/>
                    : loading ? null : <p className="subtitle"> No Todos</p>}
            </div>
        </Context.Provider>
    )
}

export default App;
