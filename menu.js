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
  event.preventDefault(); // Evita o envio padrão do formulário

  // Verifica se o nome está vazio
  if (nameInput.value.trim() === "") {
    alert("Por favor, digite seu nome!");
    return;
  }

  // Verifica se o email está vazio
  if (emailInput.value.trim() === "") {
    alert("Por favor, digite seu email!");
    return;
  }

  // Verifica se o telefone está vazio
  if (celularInput.value.trim() === "") {
    alert("Por favor, digite seu telefone!");
    return;
  }

  // Verifica se a mensagem está vazia
  if (mensagemTextarea.value.trim() === "") {
    alert("Por favor, deixe uma mensagem!");
    return;
  }

  // Se todos os campos estiverem preenchidos, envie o formulário
  form.submit();
  alert("Mensagem enviada com sucesso!");
});
