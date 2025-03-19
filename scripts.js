// Função para validar o formulário
function validarFormulario() {
    // Seleciona todos os campos obrigatórios
    const camposObrigatorios = document.querySelectorAll("input[required], select[required], textarea[required]");
    const checkboxTermos = document.getElementById("aceitar-termos");
  
    // Verifica se todos os campos obrigatórios estão preenchidos
    let todosPreenchidos = true;
    camposObrigatorios.forEach(campo => {
      if (!campo.value.trim()) {
        todosPreenchidos = false;
        campo.classList.add("campo-invalido"); // Adiciona classe de erro
      } else {
        campo.classList.remove("campo-invalido"); // Remove classe de erro
      }
    });
  
    // Verifica se a checkbox está marcada
    if (!checkboxTermos.checked) {
      todosPreenchidos = false;
      checkboxTermos.classList.add("campo-invalido"); // Adiciona classe de erro
    } else {
      checkboxTermos.classList.remove("campo-invalido"); // Remove classe de erro
    }
  
    // Se tudo estiver válido, permite prosseguir
    if (todosPreenchidos) {
      window.location.href = "tela2.html"; // Redireciona para a próxima tela
    } else {
      alert("Por favor, preencha todos os campos obrigatórios e aceite os termos.");
    }
  }
  
  // Adiciona o evento de clique ao botão "Continuar inscrição"
  document.querySelector("button[type='submit']").addEventListener("click", function (event) {
    event.preventDefault(); // Impede o envio do formulário
    validarFormulario(); // Chama a função de validação
  });