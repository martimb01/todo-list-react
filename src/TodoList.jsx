import { TodoItem } from "./TodoItem"

export function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="list">
      {todos.length === 0 && "No Todos yet"}
      {todos.map(todo => (
        <TodoItem 
          key={todo.id}
          id={todo.id}
          completed={todo.completed}
          title={todo.title}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  )
}