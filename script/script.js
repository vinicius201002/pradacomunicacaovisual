// Script de funcionamento do menu hamburger (mobile)
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');

    hamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });
});


/* Redirecionamento para tela Sobre nós */
function fnSaibaMais() {
    window.location.href = '../sobre-nos.html';
}

// Redirecionamento para redes sociais e telefone
function abrirWhatsApp() {
    const numero = '5511999235082'; // Substitua pelo número de telefone
    const mensagem = 'Olá! Gostaria de mais informações.';
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
}

function abrirInstagram() {
    window.open("https://www.instagram.com/prada_comunicacaovisual/", '_blank')
}

function ligar() {
    const numero = '+5511999235082'; // Substitua pelo número de telefone
    window.location.href = `tel:${numero}`;
}

// redirecionamento para os produtos
function redirectTo(page) {
    window.location.href = page;
}

// Carregas a mesma logo para todas as páginas
document.addEventListener('DOMContentLoaded', function() {
    var link = document.createElement('link');
    link.rel = 'icon';
    link.href = '../img/icone.ico';
    document.head.appendChild(link);
});




    // Solicitar orçamento
function solicitarOrcamento(produto) {
    const numero = '5511999235082'; // Substitua pelo número de telefone
    const mensagem = `Olá! Gostaria de solicitar um orçamento em relação ao produto ${produto}`;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
}

 // Animação no scroll
 const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        // Para observar o elemento depois de já ter sido animado
      myObserver.unobserve(entry.target);
      } else {
        entry.target.classList.remove('show');
      }
    })
  })

  const elements = document.querySelectorAll('.hidden');
  elements.forEach((element) => {
    myObserver.observe(element)
  })
