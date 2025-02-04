function toggleSection() {
    var section = document.querySelector('.hidden-section');
    if (section.style.display === 'none' || section.style.display === '') { //precisa desse ou pq o botão estava sendo clicado duas vezes para ser ativado
        section.style.display = 'block';
    } else {
        section.style.display = 'none';
    }
}


function mostrarDestinos() {
    var tipoDestino = document.getElementById('tipo-destino').value;
    var destinosNacionais = document.getElementById('destinos-nacionais');
    var destinosInternacionais = document.getElementById('destinos-internacionais');

    if (tipoDestino === 'nacional') {
        destinosNacionais.classList.remove('hidden-oculto');
        destinosInternacionais.classList.add('hidden-oculto');
    } else if (tipoDestino === 'internacional') {
        destinosNacionais.classList.add('hidden-oculto');
        destinosInternacionais.classList.remove('hidden-oculto');
    } else {
        destinosNacionais.classList.add('hidden-oculto');
        destinosInternacionais.classList.add('hidden-oculto');
    }
}

function formaPagamento() {
    var tipoPagamento = document.getElementById('tipo-pagamento').value;
    var pagamentoPix = document.getElementById('Pagamento-pix');
    var pagamentoCartao = document.getElementById('Pagamento-cartão');

    if (tipoPagamento === 'pix'){
        pagamentoPix.classList.remove('hidden-oculto');
        pagamentoCartao.classList.add('hidden-oculto');
    } else if (tipoPagamento === 'credito'){
        pagamentoPix.classList.add('hidden-oculto');
        pagamentoCartao.classList.remove('hidden-oculto');
    }else{
        pagamentoPix.classList.add('hidden-oculto');
        pagamentoCartao.classList.add('hidden-oculto');
    }
}

function copiarChave() {
    var chave = document.getElementById("chavePix").innerText;
    navigator.clipboard.writeText(chave).then(function() {
        alert("Chave Pix copiada com sucesso!");
    }, function(err) {
        alert("Erro ao copiar chave Pix: " + err);
    });
}
