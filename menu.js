let btnMenu = document.getElementById("btn-menu");
let menu = document.getElementById("menu-mobile");
let overlay = document.getElementById("overlay-menu");

btnMenu.addEventListener("click", () => {
  menu.classList.add("abrir-menu");
});

menu.addEventListener("click", () => {
  menu.classList.remove("abrir-menu");
});

overlay.addEventListener("click", () => {
  menu.classList.remove("abrir-menu");
});

const form = document.querySelector("#form");
const nameInput = document.querySelector("#nome");
const emailInput = document.querySelector("#email");
const celularInput = document.querySelector("#celular");
const mensagemTextarea = document.querySelector("#mensagem");

form.addEventListener("submit", (event) => {
  //event.preventDefault();
  console.log(nameInput.value);
  //verifica se o nome está vazio
  if (nameInput.value === "") {
    alert("Por favor, digite seu nome!");
    return;
  }
  if (emailInput.value === "") {
    alert("Por favor, digite seu email!");
    return;
  }
  if (celularInput.value === "") {
    alert("Por favor, digite seu telefone!");
    return;
  }
  if (mensagemTextarea.value === "") {
    alert("Por favor, deixe uma mensagem!");
    return;
  }

  //se todos os campos estiverem preenchidos envie o form
  form.submit();
  alert("Mensagem enviada com sucesso!");
});
