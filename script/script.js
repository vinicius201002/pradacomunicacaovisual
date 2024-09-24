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

  function updateFooter() {
    const footer = document.getElementById('footer');
    const isMobile = window.innerWidth > 768;

    if (isMobile) {
        footer.innerHTML = `
            <div class="logo">
                <img src="img/LOGO SEM FUNDO.png" width="243" height="123">
                <div class="redes-sociais">
                    <div class="contato">
                        <i class="fa-solid fa-square-envelope"></i>
                        <p>Contato.pradacomunicacaovisual.com.br</p>
                    </div>
                    <div class="contato">
                        <i class="fa-solid fa-phone"></i>
                        <p>(11) 99923-5082</p>
                    </div>
                    <div class="contato">
                        <i class="fab fa-instagram instagram-icon"></i>
                        <p>@prada.comunicacaovisual</p>
                    </div>
                </div>
                <div class="endereco">
                    <p>Rua Refinaria Materipe, 617 - São Paulo</p>
                    <p class="comochegar">Como chegar?</p>
                    <b>Horário de funcionamento:</b>
                    <p>Seg. à Sex. 9h às 18h</p>
                </div>
            </div>
            <div class="info">
                <p class="pequeno_titulo">Institucional</p>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="sobre-nos.html">Sobre nós</a></li>
                    <li><a href="produtos.html">Produtos</a></li>
                    <li><a href="404.html">Contato</a></li>
                </ul>
            </div>
            <div class="info">
                <p class="pequeno_titulo">Produtos</p>
                <ul>
                    <li><a href="produtos/adesivo.html">Adesivo</a></li>
                    <li><a href="produtos/banner.html">Banner</a></li>
                    <li><a href="produtos/windbanner.html">Wind Banner</a></li>
                    <li><a href="produtos/totemmdf.html">Totem MDF</a></li>
                    <li><a href="produtos/placaadesivada.html">Placa PS</a></li>
                    <li><a href="produtos/painelpantografico.html">Painel Pantográfico</a></li>
                </ul>
            </div>`;
    } else {
        // O HTML original
        footer.innerHTML = `
            <div class="logo">
                <img src="img/LOGO SEM FUNDO.png" width="243" height="123">
                <div class="redes-sociais">
                    <div class="contato">
                        <i class="fa-solid fa-square-envelope"></i>
                        <p>Contato.pradacomunicacaovisual.com.br</p>
                    </div>
                    <div class="contato">
                        <i class="fa-solid fa-phone"></i>
                        <p>(11) 99923-5082</p>
                    </div>
                    <div class="contato">
                        <i class="fab fa-instagram instagram-icon"></i>
                        <p>@prada.comunicacaovisual</p>
                    </div>
                </div>
                <div class="endereco">
                    <p>Rua Refinaria Materipe, 617 - São Paulo</p>
                    <p class="comochegar">Como chegar?</p>
                    <b>Horário de funcionamento:</b>
                    <p>Seg. à Sex. 9h às 18h</p>
                </div>
            </div>
            <div class="infos2">
                <div class="info">
                    <p class="pequeno_titulo">Institucional</p>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="sobre-nos.html">Sobre nós</a></li>
                        <li><a href="produtos.html">Produtos</a></li>
                        <li><a href="404.html">Contato</a></li>
                    </ul>
                </div>
                <div class="info">
                    <p class="pequeno_titulo">Produtos</p>
                    <ul>
                        <li><a href="produtos/adesivo.html">Adesivo</a></li>
                        <li><a href="produtos/banner.html">Banner</a></li>
                        <li><a href="produtos/windbanner.html">Wind Banner</a></li>
                        <li><a href="produtos/totemmdf.html">Totem MDF</a></li>
                        <li><a href="produtos/placaadesivada.html">Placa PS</a></li>
                        <li><a href="produtos/painelpantografico.html">Painel Pantográfico</a></li>
                    </ul>
                </div>
            </div>`;
    }
}

function updateFooterMobile() {
    const footer = document.getElementById('footer-produtos');
    const isMobile = window.innerWidth > 768;

    if (isMobile) {
        footer.innerHTML = `
            <div class="logo">
                <img src="../img/LOGO SEM FUNDO.png" width="243" height="123">
                <div class="redes-sociais">
                    <div class="contato">
                        <i class="fa-solid fa-square-envelope"></i>
                        <p>Contato.pradacomunicacaovisual.com.br</p>
                    </div>
                    <div class="contato">
                        <i class="fa-solid fa-phone"></i>
                        <p>(11) 99923-5082</p>
                    </div>
                    <div class="contato">
                        <i class="fab fa-instagram instagram-icon"></i>
                        <p>@prada.comunicacaovisual</p>
                    </div>
                </div>
                <div class="endereco">
                    <p>Rua Refinaria Materipe, 617 - São Paulo</p>
                    <p class="comochegar">Como chegar?</p>
                    <b>Horário de funcionamento:</b>
                    <p>Seg. à Sex. 9h às 18h</p>
                </div>
            </div>
            <div class="info">
                <p class="pequeno_titulo">Institucional</p>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="sobre-nos.html">Sobre nós</a></li>
                    <li><a href="produtos.html">Produtos</a></li>
                    <li><a href="404.html">Contato</a></li>
                </ul>
            </div>
            <div class="info">
                <p class="pequeno_titulo">Produtos</p>
                <ul>
                    <li><a href="produtos/adesivo.html">Adesivo</a></li>
                    <li><a href="produtos/banner.html">Banner</a></li>
                    <li><a href="produtos/windbanner.html">Wind Banner</a></li>
                    <li><a href="produtos/totemmdf.html">Totem MDF</a></li>
                    <li><a href="produtos/placaadesivada.html">Placa PS</a></li>
                    <li><a href="produtos/painelpantografico.html">Painel Pantográfico</a></li>
                </ul>
            </div>`;
    } else {
        // O HTML original
        footer.innerHTML = `
            <div class="logo">
                <img src="../img/LOGO SEM FUNDO.png" width="243" height="123">
                <div class="redes-sociais">
                    <div class="contato">
                        <i class="fa-solid fa-square-envelope"></i>
                        <p>Contato.pradacomunicacaovisual.com.br</p>
                    </div>
                    <div class="contato">
                        <i class="fa-solid fa-phone"></i>
                        <p>(11) 99923-5082</p>
                    </div>
                    <div class="contato">
                        <i class="fab fa-instagram instagram-icon"></i>
                        <p>@prada.comunicacaovisual</p>
                    </div>
                </div>
                <div class="endereco">
                    <p>Rua Refinaria Materipe, 617 - São Paulo</p>
                    <p class="comochegar">Como chegar?</p>
                    <b>Horário de funcionamento:</b>
                    <p>Seg. à Sex. 9h às 18h</p>
                </div>
            </div>
            <div class="infos2">
                <div class="info">
                    <p class="pequeno_titulo">Institucional</p>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="sobre-nos.html">Sobre nós</a></li>
                        <li><a href="produtos.html">Produtos</a></li>
                        <li><a href="404.html">Contato</a></li>
                    </ul>
                </div>
                <div class="info">
                    <p class="pequeno_titulo">Produtos</p>
                    <ul>
                        <li><a href="produtos/adesivo.html">Adesivo</a></li>
                        <li><a href="produtos/banner.html">Banner</a></li>
                        <li><a href="produtos/windbanner.html">Wind Banner</a></li>
                        <li><a href="produtos/totemmdf.html">Totem MDF</a></li>
                        <li><a href="produtos/placaadesivada.html">Placa PS</a></li>
                        <li><a href="produtos/painelpantografico.html">Painel Pantográfico</a></li>
                    </ul>
                </div>
            </div>`;
    }
}

// Chame a função inicialmente e sempre que a janela for redimensionada
window.addEventListener('resize', updateFooter);
window.addEventListener('resize', updateFooterMobile)
updateFooterMobile();
updateFooter();