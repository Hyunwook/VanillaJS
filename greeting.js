
const form = document.querySelector(".js-form"),
  input = form && form.querySelector("input"); //옵셔널체이닝ES11 =form?.
  let greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function saveName(text){
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
  event.preventDefault();
  const currentValue = input?.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName(){
  form?.classList.add(SHOWING_CN);
  form?.addEventListener("submit", handleSubmit);
}

function paintGreeting(text){
  form?.classList.remove(SHOWING_CN);
  //@ts-ignore
  greeting.classList.add(SHOWING_CN);
  //@ts-ignore
  greeting.innerText = `Hello ${text}`;
}

function loadName(){
  const currentUser = localStorage.getItem(USER_LS);
  if(currentUser === null){
    //she is not
    askForName();
  }else{
    //she is
    paintGreeting(currentUser);
  }
}

function init(){
  loadName();
}
init();