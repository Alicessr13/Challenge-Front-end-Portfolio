const formulario = document.getElementById("formulario");
const botao = document.getElementById("button-form");
let nome = document.getElementById("name");
let email = document.getElementById("email");
let assunto = document.getElementById("assunto");
let mensagem = document.getElementById("mensagem");

formulario.addEventListener("submit", function (event) {
    event.preventDefault(); //não faz o padrão de recarregar a página
})

function validaVazio(id) {
    let conteudo = id.value;

    if (typeof conteudo === 'undefined' || conteudo === null || conteudo === '') {
        return true;
    } else {
        return false;
    }
}

function atualizaBotao() {
    if (validaVazio(nome) || validaVazio(email) || validaVazio(assunto) || validaVazio(mensagem)) {
        botao.disabled = true;
    } else {
        botao.disabled = false;
    }
}

function validaCampos() {
    let conteudoNome = nome.value;
    let conteudoAssunto = assunto.value;
    let conteudoEmail = email.value;
    let conteudoMensagem = mensagem.value;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (conteudoNome.length > 50) {
        return alert("O nome não pode ter mais de 50 caracteres");
    }
    else if (regex.test(conteudoEmail) == false) {
        return alert("E-mail em formato inválido");
    }
    else if (conteudoAssunto.length > 50) {
        return alert("O assunto tem mais de 50 caracteres");
    }
    else if (conteudoMensagem.length > 300) {
        return alert("A mansagem tem mais de 300 caracteres");
    }
    else {
        return alert("E-mail enviado com sucesso");
    }
}

function enviarEmail() {
    let conteudoNome = nome.value;
    let conteudoAssunto = assunto.value;
    let conteudoEmail = email.value;
    let conteudoMensagem = mensagem.value;

    const mailtoLink = `mailto:alicessr12@gmail.com?subject=${encodeURIComponent(conteudoAssunto)}&body=${encodeURIComponent("Nome: " + conteudoNome + "\nEmail: " + conteudoEmail + "\n\nMensagem:\n" + conteudoMensagem)}`;

    window.location.href = mailtoLink;

    return false; // Impede o envio do formulário de forma tradicional
}


nome.addEventListener("input", atualizaBotao);
email.addEventListener("input", atualizaBotao);
assunto.addEventListener("input", atualizaBotao);
mensagem.addEventListener("input", atualizaBotao);

atualizaBotao();