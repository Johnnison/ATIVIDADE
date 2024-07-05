
// função 1 

let slideIndex = 1; // começa o índice do slide atual representado por 1
showSlides(slideIndex); // Chamada de função para exibir o slide inicial

//--------------------------------------------------------------------------

// função 2 : para avançar ou voltar os slides 
function plusSlides(n) {
    showSlides(slideIndex += n);// função para atualizar o índice do slide e exibir o slide correspondente
}

//---------------------------------------------------------------------------

// função 3 : Função para Definir o Slide Atual
function currentSlide(n) {
    showSlides(slideIndex = n);  // função para definir o índice do slide e exibe o slide correspondente
}

//----------------------------------------------------------------------------

// função 4 : Função principal que exibe o slide atual
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides"); // Seleciona todos os elementos com a classe 'mySlides'
    let pontos = document.getElementsByClassName("ponto"); // Seleciona todos os elementos com a classe 'ponto'


    if (n > slides.length) { 
        slideIndex = 1 // Se o índice do slide atual for maior que o número de slides, volta ao primeiro slide
    }
    
    if (n < 1) { 
        slideIndex = slides.length // Se o índice do slide atual for menor que 1, volta ao último slide
    }
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Esconde todos os slides
    }
    
    for (i = 0; i < pontos.length; i++) {
        pontos[i].className = pontos[i].className.replace(" active", "");
    }
    
    slides[slideIndex - 1].style.display = "block"; // Exibe o slide correspondente ao índice do slide atual
    
    pontos[slideIndex - 1].className += " active"; // Adiciona a classe 'active' ao ponto correspondente ao slide atual
}