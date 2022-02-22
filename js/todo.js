/*
<instruction>
1. todo list를 html상에 나오도록 만든다.
*/
const todoInput = todoForm.querySelector("#todoForm input");
const todoList = document.getElementById("todo-list");

todoForm.addEventListener("submit", todoSubmit);

function todoSubmit(event) {
  event.preventDefault();
  const todo = todoInput.value;
  todoInput.value = null;
  showTodo(todo);
}

function showTodo(todo) {
  const li = document.createElement("li");
  todoList.appendChild(li);
  const span = document.createElement("span");
  li.appendChild(span);
  span.innerText = todo;
  const btn = document.createElement("button");
  li.appendChild(btn);
  btn.innerText = "❌";
  btn.addEventListener("click", deleteTodo);
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
}
