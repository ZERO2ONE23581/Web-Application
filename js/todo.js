/*
<instruction>
1. todo list를 html상에 나오도록 만든다.
2. data를 local에 저장한다
*/
const todoInput = todoForm.querySelector("#todoForm input");
const todoList = document.getElementById("todo-list");
const TODO_KEY = "todo-key";

todoForm.addEventListener("submit", todoSubmit);

function todoSubmit(event) {
  event.preventDefault();
  const todo = todoInput.value;
  todoInput.value = null;
  showTodo(todo);
  saveTodo(todo); //로컬데이터에 저장
}

function showTodo(event) {
  const li = document.createElement("li");
  todoList.appendChild(li);
  const span = document.createElement("span");
  li.appendChild(span);
  span.innerText = event;
  const btn = document.createElement("button");
  li.appendChild(btn);
  btn.innerText = "❌";
  btn.addEventListener("click", deleteTodo);
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
}

//로컬에 데이터 보관 (locastorage!==database)
function saveTodo(event) {
  localStorage.setItem(TODO_KEY, event);
}
//로컬에 보관된 데이터 소환
const savedTodo = localStorage.getItem(TODO_KEY);
if (savedTodo !== null) {
  //null인 경우 innerText가 null인채로 html에 표시된다.
  showTodo(savedTodo);
}
