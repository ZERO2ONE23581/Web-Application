/*
<instruction>
1. todo list를 html상에 나오도록 만든다.
2. data를 local에 저장한다
3. 로그인 처럼 하나가 아닌 여러 데이터가 들어감으로 데이터베이스를 만들어준다.
4. delete btn을 누르면 로컬데이터도 삭제되게 한다. (id는 date.now()를 이용할것) (filter메소드 이용)
*/

//가상 database
let todoDb = [];

const todoInput = todoForm.querySelector("#todoForm input");
const todoList = document.getElementById("todo-list");
const TODO_KEY = "todo-key";

todoForm.addEventListener("submit", todoSubmit);

function todoSubmit(event) {
  event.preventDefault();
  const todo = {
    //todo를 object형식으로 만들어 id를 부과
    name: todoInput.value,
    id: Date.now(),
  };
  todoInput.value = null;
  if (todo.name !== "") {
    //그냥 엔터눌렀을때 세이브방지
    showTodo(todo);
    todoDb.push(todo); // db에 저장
  }
  saveTodo(); //함수에서 배열을 저장할것
}

function showTodo(event) {
  const li = document.createElement("li");
  li.id = event.id; //li에 id 넣어줌
  todoList.appendChild(li);
  const span = document.createElement("span");
  li.appendChild(span);
  span.innerText = event.name; //text에는 name
  const btn = document.createElement("button");
  li.appendChild(btn);
  btn.innerText = "❌";
  btn.addEventListener("click", deleteTodo);
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  console.log(typeof li.id); //string이기에 filter할때 number로 바꿔줘야됨!
  //로컬데이터 삭제
  //배열안의 obejct중 id가 삭제하고자하는 li의 id와 일치하는 것을 거른다. (거르고 새 배열에 넣어주는 작업까지)
  todoDb = todoDb.filter((object) => object.id !== parseInt(li.id)); // 필터링된 새배열 -> 기존배열
  console.log(todoDb);
  saveTodo();
}

//로컬에 데이터 보관 (locastorage!==database)
function saveTodo() {
  localStorage.setItem(TODO_KEY, JSON.stringify(todoDb)); //string
}
//로컬에 보관된 데이터 소환
const savedTodo = localStorage.getItem(TODO_KEY);

if (savedTodo !== null) {
  const parsedTodo = JSON.parse(savedTodo); //array
  todoDb = parsedTodo;
  todoDb.forEach(showTodo);
}
