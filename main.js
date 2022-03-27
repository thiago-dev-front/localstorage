let btn = document.querySelector("button");
let div = document.querySelector("div");
let span = document.querySelector("span");

let auth = false;

function userLogin() {
  auth = true;
  span.textContent = `Autenticado ${auth}`;
  btn.textContent = "Logado!";

  localStorage.setItem("btn" , btn.textContent);
  localStorage.setItem("span" , span.textContent);
}

let btnItem = localStorage.getItem("btn");
let spanItem = localStorage.getItem("span");

btn.textContent = btnItem ? btnItem : 'Login';
span.textContent = spanItem ? spanItem : 'Deslogado';


