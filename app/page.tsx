import { Suspense } from "react";

type Todo = {
  title: string;
}

async function fetchTodos(): Promise<Todo[]> {
  const res = await fetch("http://localhost:3000/api/todos", { cache: "no-cache" });
  return res.json();
}

async function TodoList() {
  const todos = await fetchTodos();
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.title}>{todo.title}</li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <>
      <h1>Todos</h1>
      <Suspense fallback={<p>読込み中...</p>}>
        <TodoList />
      </Suspense>
    </>
  );
}
