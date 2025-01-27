function toggleSection() {
    var section = document.querySelector('.hidden-section');
    if (section.style.display == 'none') {
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

