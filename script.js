const menuToggle = document.getElementById('menu-toggle');
const contentPr = document.querySelector('.content-pr');
const contentPr2 = document.querySelector('.content-pr2');

menuToggle.addEventListener('change', function() {
  if (this.checked) {
    // Se o menu estiver visível, adicione a classe "hidden" para ocultar o conteúdo
    contentPr2.classList.add('hidden');
  } else {
    // Caso contrário, remova a classe "hidden" para exibir o conteúdo
    contentPr2.classList.remove('hidden');
  }
});
