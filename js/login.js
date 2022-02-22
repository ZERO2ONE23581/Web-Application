/*
<로그인기능구현>
1. 로그인시 - 로그인 인풋 사라고 - 환영문구 소환되게 할것
2. 새로고침해도 로그인 유지되게 할것
*/
const loginForm = document.getElementById("login-form");
const usernameInput = loginForm.querySelector("input:nth-child(1)");
const greeting = document.getElementById("greeting");

const USERNAME_KEY = "username-key";
//2. 로컬데이터 소환
const savedKey = localStorage.getItem(USERNAME_KEY);
if (!savedKey) {
  loginDisplay();
  loginForm.addEventListener("submit", loginSubmit);
} else {
  showGreeting(savedKey); //3. 데이터유지
}

function loginSubmit(event) {
  event.preventDefault();
  const username = usernameInput.value;
  usernameInput.value = null;
  showGreeting(username);
  loginSave(username); //1. 로컬에 저장
}

function loginDisplay() {
  loginForm.hidden = false;
  greeting.hidden = true;
}

function showGreeting(username) {
  loginForm.hidden = true;
  greeting.hidden = false;
  greeting.innerText = `Welcome ${username} !`;
}

function loginSave(username) {
  localStorage.setItem(USERNAME_KEY, username);
}
