// Função para validar o formulário
function validarFormulario(event) {
  event.preventDefault(); // Impede o envio do formulário

  // Seleciona todos os campos obrigatórios
  const camposObrigatorios = document.querySelectorAll("input[required], select[required], textarea[required]");
  const checkboxTermos = document.getElementById("aceitar-termos");

  let todosPreenchidos = true;

  // Verifica se todos os campos obrigatórios estão preenchidos
  camposObrigatorios.forEach(campo => {
    if (!campo.value.trim()) {
      todosPreenchidos = false;
      campo.classList.add("campo-invalido"); // Adiciona classe de erro
    } else {
      campo.classList.remove("campo-invalido"); // Remove classe de erro
    }
  });

  // Verifica se a checkbox está marcada (apenas na tela 1)
  if (checkboxTermos && !checkboxTermos.checked) {
    todosPreenchidos = false;
    checkboxTermos.classList.add("campo-invalido"); // Adiciona classe de erro
  } else if (checkboxTermos) {
    checkboxTermos.classList.remove("campo-invalido"); // Remove classe de erro
  }

  // Se tudo estiver válido, permite prosseguir
  if (todosPreenchidos) {
    if (window.location.href.includes("tela1.html")) {
      window.location.href = "tela2.html"; // Redireciona para a tela 2
    } else if (window.location.href.includes("tela2.html")) {
      alert("Inscrição finalizada com sucesso!"); // Mensagem de sucesso
      // Aqui você pode adicionar o envio do formulário ou outras ações
    }
  } else {
    alert("Por favor, preencha todos os campos obrigatórios e aceite os termos.");
  }
}

// Função para voltar à tela anterior
function voltarTela() {
  window.location.href = "tela1.html"; // Redireciona para a tela 1
}

// Adiciona o evento de submit ao formulário
document.querySelector("form").addEventListener("submit", validarFormulario);