// COMENTARIOS SOBRE JAVA SCRIPT MANIPULAÇÃO DO DOM (Document Object Model):

// função 1 

let slideIndex = 1; // começa o índice do slide atual representado por 1
showSlides(slideIndex); // Chamada de função para mostrar o slide inicial

//--------------------------------------------------------------------------

// função 2 : para avançar ou voltar os slides 
function plusSlides(n) {
    showSlides(slideIndex += n);// função para atualizar o índice do slide e exibir o slide correspondente
}

//---------------------------------------------------------------------------

// função 3 : Função para Definir o Slide Atual quando clicar nos pontos de navegação
function currentSlide(n) {
    showSlides(slideIndex = n);  // função para definir o índice do slide e exibe o slide correspondente
}

//----------------------------------------------------------------------------

// função 4 : Função principal que exibe o slide atual
function showSlides(n) {
    let i; 
    let slides = document.getElementsByClassName("mySlides");// Seleciona todos os elementos com a classe ""mySlides" os slides
    let pontos = document.getElementsByClassName("ponto"); // Seleciona todos os elementos com a classe "ponto" ou seja os pontos de navegação

 // Verifica se o índice do slide atual é maior que o número total de slides
    if (n > slides.length) { 
        slideIndex = 1 // Se for maior voltar para o primeiro slide
    }
     // Verifica se o índice do slide atual é menor que 1
    if (n < 1) { 
        slideIndex = slides.length // se for menor voltar para o ultimo slide
    }
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Esconde todos os slides
    }
    
    for (i = 0; i < pontos.length; i++) {
        pontos[i].className = pontos[i].className.replace(" active", "");  // Remove a classe 'active' de todos os pontos de navegação
    }
    
    slides[slideIndex - 1].style.display = "block"; // Exibe o slide correspondente ao índice do slide atual
    
    pontos[slideIndex - 1].className += " active"; // Adiciona a classe 'active' ao ponto correspondente ao slide atual
}





// O QUE EU ENTENDE SOBRE A LÓGICA  DO JAVA SCRIPT:


// No meu ver a lógica do javascript é criar funções para ajudar a melhorar o sistema, assim o usuario é quem ira de uma certa forma executar
// essas funções durante o uso do site, o java script ira criar funções mais complexas como um botão interativo por exemplo, na criação deste slide
// foram usadas funções como  plusSlides(n) e currentSlide(n) a resposta dessas funções seram mostradas por exemplo quando o usuario clicar ou passar
// o mouse em botões ou pontos do slide.

//o javascript trabalha escondendo os slides deixando a vista apenas o slide atual, também destacando o ponto que corresponde a imagem atual do slide,
//tudo isso demonstra a ampla capacidade que o javascript tem de trazer uma experiencia muito mais legal ao usuario.


//Os eventos de clique nos botões e nos pontos de navegação:

//são criados os botões no html com <button> ou usando a div mesmo com atributos proprios e facil de distinguir como avançar e voltar por exemplo,
//no javascript é criada uma função plusSlides assim quando clicar nos pontos de navegação ela atualiza o slideIndex exibindo o proximo slide.

//Os pontos de navegação  são criados usando <span> ou <div> cada um representa um slide o usuario ao clicar vai para determinado slide
// cada botão tem um atributo onclick que vai fazer a chamada da função currentSlide(n) com o indice do slide correspondente
// o currentSlide é ativado quando clicar no ponto de navegação ela atualiza o slideIndex para n e chama o showslides exibindo a imagem de acordo com o ponto

//A função showSlides(n) é a principal para controlar a exibição dos slides e a marcação dos pontos de navegação como ativos ou inativos, ela oculta,
// exibe, marca os pontos como ativos.









