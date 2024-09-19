var produtos = [
    ["Banner", "/produtos/banner.html", "/img/produtos/bannerbastaoecorda.jfif"],
    ["Faixa", "/produtos/faixa.html", "/img/produtos/faixalonamadeira.jpg"],
    ["Rollup", "/produtos/rollup.html", "/img/produtos/rollup.webp"],
    ["Wind Banner", "/produtos/windbanner.html", "/img/produtos/windbanner.jpeg"],
    ["Adesivo com recorte", "/produtos/adesivo.html", "/img/produtos/adesivocomrecorte.jpg"],
    ["Adesivo sem recorte", "/produtos/adesivosemrecorte.html", "/img/produtos/adesivosemrecorte.jpg"],
    ["Placa adesivada", "/produtos/placaadesivada.html", "/img/produtos/placaadesivada.png"],
    ["Painel Pantográfico", "/produtos/painelpantografico.html", "/img/produtos/painelpantografico.webp"],
    ["Totem MDF", "/produtos/totemmdf.html", "/img/produtos/totemmdf.jpg"],
    ["Wobbler", "/produtos/wobbler.html", "/img/produtos/wobbler.jpg"],
    ["Roleta", "/produtos/roleta.html", "/img/produtos/nophoto.png"],
    ["Mobile", "/produtos/mobile.html", "/img/produtos/mobile.webp"]];

var produtosEncontrados = [];


function buscarProdutos(metodo) {
    if (metodo == "mobile") {
        var pesquisa = document.getElementById('ipt_pesquisa_mobile').value;
        const pesquisaLower = pesquisa.toLowerCase();
    
        // Filtra os produtos que contêm a string de pesquisa
        var produtosEncontrados = produtos
            .filter(([nome]) => nome.toLowerCase().includes(pesquisaLower))
            .map(([nome]) => nome);  // Mapeia para obter apenas os nomes
    
        // Convertendo o vetor de nomes para uma string separada por vírgulas
        var produtosString = produtosEncontrados.join(',');
    
        // Codificando a string para evitar problemas com caracteres especiais na URL
        var produtosEncoded = encodeURIComponent(produtosString);
    } else {
        var pesquisa = document.getElementById('ipt_pesquisa').value;
        const pesquisaLower = pesquisa.toLowerCase();
    
        // Filtra os produtos que contêm a string de pesquisa
        var produtosEncontrados = produtos
            .filter(([nome]) => nome.toLowerCase().includes(pesquisaLower))
            .map(([nome]) => nome);  // Mapeia para obter apenas os nomes
    
        // Convertendo o vetor de nomes para uma string separada por vírgulas
        var produtosString = produtosEncontrados.join(',');
    
        // Codificando a string para evitar problemas com caracteres especiais na URL
        var produtosEncoded = encodeURIComponent(produtosString);
    
        
    }

    sessionStorage.setItem('produtopesquisado', pesquisa);
    
        // Redirecionando para a página de destino com o vetor como parâmetro de URL
        window.location.href = '/busca.html?vetor=' + produtosEncoded;
    
}