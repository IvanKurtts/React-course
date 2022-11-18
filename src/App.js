import React, {useEffect} from "react";
import TodoList from "./Todo/TodoList";
import Context from "./context";
// import AddTodo from "./Todo/AddTodo";
import Loader from "./Loader";
import Modal from "./Modal/Modal";

const AddTodo = React.lazy(() => import('./Todo/AddTodo'));

function App() {
  const [todos, setTodos] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(response => response.json())
      .then(todos => {
        setTimeout(()=>{
          setTodos(todos)
          setLoading(false)
        },2000)
      })
  }, []) 

  function toggleTodo(id) {
    setTodos (
      todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
      })
    )
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function addTodo(title) {
    setTodos(todos.concat([{
      title,
      id: Date.now(),
      completed: false,
    }]))
  }
  
  return (
    <Context.Provider value={{removeTodo: removeTodo}}>
    <div className="wrapper">
        <h1>My notes</h1>
      <div className='header'> 
        <React.Suspense fallback={<p>Loading...</p>}>
          <AddTodo onCreate={addTodo}></AddTodo>
        </React.Suspense>
        <Modal></Modal>
      </div>
        {loading && <Loader></Loader>}
        {todos.length ? (<TodoList todos={todos} onToggle={toggleTodo}></TodoList>
        ) : loading ? null : (<h2>Empty...</h2>)}
      </div>
    </Context.Provider>
  )
}

export default App;
