// === Contador de pedido (acessível com aria-live) ===
const botoes = document.querySelectorAll('.btn-add');
const contador = document.getElementById('contador-pedido');

let total = 0;

if (contador && botoes.length > 0) {
  botoes.forEach((btn) => {
    btn.addEventListener('click', () => {
      total++;
      contador.textContent = total;
    });
  });
}

// === Ano dinâmico no rodapé ===
const ano = document.getElementById('ano');

if (ano) {
  ano.textContent = new Date().getFullYear();
}

// === Validação acessível do formulário ===
const form = document.querySelector('.form');
const feedback = document.getElementById('form-feedback');

if (form && feedback) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const mensagem = form.mensagem.value.trim();

    feedback.classList.remove('success', 'error');

    // Verifica campos vazios
    if (!nome || !email || !mensagem) {
      feedback.textContent = '❌ Por favor, preencha todos os campos.';
      feedback.classList.add('error');
      return;
    }

    // Validação simples de e-mail
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailValido.test(email)) {
      feedback.textContent = '❌ Informe um e-mail válido.';
      feedback.classList.add('error');
      return;
    }

    // Sucesso
    feedback.textContent = `✅ Obrigado, ${nome}! Sua mensagem foi enviada.`;
    feedback.classList.add('success');

    form.reset();
  });
}