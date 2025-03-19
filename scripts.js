// Função para validar o formulário
function validarFormulario(event) {
  event.preventDefault(); // Impede o envio do formulário

  // Seleciona todos os campos obrigatórios
  const formulario = event.target;
  const camposObrigatorios = formulario.querySelectorAll("input[required], select[required], textarea[required]");
  const checkboxTermos = formulario.querySelector("#aceitar-termos");
  const checkboxesDisponibilidade = formulario.querySelectorAll("input[name='disponibilidade']");
  const uploadDocumentos = formulario.querySelector("#upload-documentos");

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

  // Verifica se pelo menos um checkbox de disponibilidade está selecionado (apenas na tela 2)
  if (checkboxesDisponibilidade.length > 0) {
    let disponibilidadeSelecionada = false;
    checkboxesDisponibilidade.forEach(checkbox => {
      if (checkbox.checked) {
        disponibilidadeSelecionada = true;
      }
    });

    if (!disponibilidadeSelecionada) {
      todosPreenchidos = false;
      document.getElementById("feedback-disponibilidade").style.display = "block"; // Exibe feedback
    } else {
      document.getElementById("feedback-disponibilidade").style.display = "none"; // Oculta feedback
    }
  }

  // Verifica se pelo menos um arquivo foi enviado (apenas na tela 2)
  if (uploadDocumentos) {
    if (uploadDocumentos.files.length === 0) {
      todosPreenchidos = false;
      document.getElementById("feedback-upload").style.display = "block"; // Exibe feedback
    } else {
      document.getElementById("feedback-upload").style.display = "none"; // Oculta feedback
    }
  }

  // Se tudo estiver válido, permite prosseguir
  if (todosPreenchidos) {
    if (formulario.id === "formulario-tela1") {
      window.location.href = "tela2.html"; // Redireciona para a tela 2
    } else if (formulario.id === "formulario-tela2") {
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

// Adiciona o evento de submit ao formulário da tela 1
const formularioTela1 = document.querySelector("#formulario-tela1");
if (formularioTela1) {
  formularioTela1.addEventListener("submit", validarFormulario);
}

// Adiciona o evento de submit ao formulário da tela 2
const formularioTela2 = document.querySelector("#formulario-tela2");
if (formularioTela2) {
  formularioTela2.addEventListener("submit", validarFormulario);
}