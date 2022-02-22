/*
<instruction>
1. todo list를 html상에 나오도록 만든다.
2. data를 local에 저장한다
3. 로그인 처럼 하나가 아닌 여러 데이터가 들어감으로 데이터베이스를 만들어준다.
*/

//가상 database
let todoDb = [];

const todoInput = todoForm.querySelector("#todoForm input");
const todoList = document.getElementById("todo-list");
const TODO_KEY = "todo-key";

todoForm.addEventListener("submit", todoSubmit);

function todoSubmit(event) {
  event.preventDefault();
  const todo = todoInput.value;
  todoInput.value = null;
  showTodo(todo);
  todoDb.push(todo); // db에 저장
  saveTodo(); //함수에서 배열을 저장할것
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
function saveTodo() {
  //localStorage에는 어떤데이터든 문자열로 인식함으로 "배열을 통째로 문자열로" 넣기위해 JSON.stringify를 활용
  localStorage.setItem(TODO_KEY, JSON.stringify(todoDb));
}
//로컬에 보관된 데이터 소환
const savedTodo = localStorage.getItem(TODO_KEY);
console.log(savedTodo); //string

if (savedTodo !== null) {
  //로컬상 배열로 보이지만 사실 string -> 이걸 다시 array로 바꿔주기 위해 JSON.parse를 활용
  const parsedTodo = JSON.parse(savedTodo);
  console.log(parsedTodo); //array
  todoDb = parsedTodo; //parseTodo -> 기존 array에 업데이트 (할당)
  todoDb.forEach(showTodo); // 업데이트된 array의 element를 각 인수로하여 showTodo 함수실행!
}
