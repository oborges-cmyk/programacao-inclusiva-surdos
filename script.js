new window.VLibras.Widget('https://vlibras.gov.br/app');

        function toggleContrast() {
            document.body.classList.toggle('high-contrast');
        }
  // Seleciona os botões
  const btnDecrease = document.getElementById('btn-font-decrease');
  const btnReset = document.getElementById('btn-font-reset');
  const btnIncrease = document.getElementById('btn-font-increase');

  // Define o elemento alvo e o tamanho de fonte padrão
  const targetElement = document.body; // Altere para outro seletor, se necessário
  let fontSize = 16; // Tamanho de fonte padrão em pixels

  // Função para atualizar o tamanho da fonte
  function updateFontSize() {
    targetElement.style.fontSize = `${fontSize}px`;
  }

  // Eventos para os botões
  btnDecrease.addEventListener('click', () => {
    fontSize = Math.max(10, fontSize - 2); // Limita o tamanho mínimo a 10px
    updateFontSize();
  });

  btnReset.addEventListener('click', () => {
    fontSize = 16; // Reseta para o tamanho padrão
    updateFontSize();
  });

  btnIncrease.addEventListener('click', () => {
    fontSize = Math.min(32, fontSize + 2); // Limita o tamanho máximo a 32px
    updateFontSize();
  });

  // Inicializa o tamanho da fonte
  updateFontSize();