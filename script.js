// Efeito 1: Mostrar mensagem de promoção ao clicar no botão da página inicial
document.addEventListener("DOMContentLoaded", () => {
  const btnPromo = document.getElementById("btnPromo");
  const promoMsg = document.getElementById("promoMensagem");
  if (btnPromo && promoMsg) {
    btnPromo.addEventListener("click", () => {
      if (promoMsg.style.display === "none" || promoMsg.style.display === "") {
        promoMsg.style.display = "block";
      } else {
        promoMsg.style.display = "none";
      }
    });
  }
});

// Efeito extra com jQuery: fadeToggle no botão de promoção
$(document).ready(function () {
  $("#btnPromo").on("click", function () {
    $("#promoMensagem").fadeToggle(2000);
  });
});

// Efeito 2: Animação simples ao passar o mouse nos botões de compra
document.querySelectorAll(".btn-comprar").forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    btn.style.backgroundColor = "#009933";
    btn.textContent = "Adicionar ao Carrinho";
  });
  btn.addEventListener("mouseleave", () => {
    btn.style.backgroundColor = "#004080";
    btn.textContent = "Comprar";
  });
});

// Validação do formulário de contato
function validarFormulario() {
  const nome = document.getElementById("nome");
  const email = document.getElementById("email");
  const mensagem = document.getElementById("mensagem");
  let erro = false;

  // Limpar erros anteriores
  document.querySelectorAll(".erro").forEach((el) => el.remove());

  if (!nome.value.trim()) {
    mostrarErro(nome, "Por favor, preencha seu nome.");
    erro = true;
  }

  if (!email.value.trim()) {
    mostrarErro(email, "Por favor, preencha seu email.");
    erro = true;
  } else if (!/\S+@\S+\.\S+/.test(email.value)) {
    mostrarErro(email, "Email inválido.");
    erro = true;
  }

  if (!mensagem.value.trim()) {
    mostrarErro(mensagem, "Por favor, escreva sua mensagem.");
    erro = true;
  }

  return !erro;
}

  function mostrarErro(campo, mensagem) {
    const erroSpan = document.createElement("span");
    erroSpan.className = "erro";
    erroSpan.style.color = "red";
    erroSpan.textContent = mensagem;
    campo.parentNode.insertBefore(erroSpan, campo.nextSibling);
  }
  // Botão Hamburguer
  document.addEventListener("DOMContentLoaded", () => {
    const btnMenu = document.getElementById("btnMenu");
    const navMenu = document.querySelector("nav#menu ul");

    if (btnMenu && navMenu) {
      btnMenu.addEventListener("click", () => {
        navMenu.classList.toggle("ativo");
      });
    }
  });
