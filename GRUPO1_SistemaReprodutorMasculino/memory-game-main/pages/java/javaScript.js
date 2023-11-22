//JavaScript para guardar o nome do usuário e ir para a segunda página do site

const botao = document.querySelector("#enviaBTN");
const formulario_NomeUser = document.querySelector("#nomUser");
const input = document.querySelector("#nameUser");

const handleSubmit = (event) => {
    event.preventDefault(); 
    localStorage.setItem('nome_do_jogador', input.value);
    window.location = 'segundaPag.html';
}

formulario_NomeUser.addEventListener('submit', handleSubmit);