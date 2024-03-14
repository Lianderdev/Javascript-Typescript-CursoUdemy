
function enviarInformacoes() { // é responsável por pegar informações de um formulário HTML e exibi-las em algum lugar da página.
    const form = document.querySelector('.form') // Esta linha seleciona o elemento HTML com a classe .form e armazena na constante form
    const resultado = document.querySelector('.tela-cadastro') // local onde as informações do formulário serão exibidas
    const pessoas = [] // onde vamos armazenar os dados das pessoas.

    function recebeEventoForm (e) { // será chamada quando o formulário for submetido. Ela recebe um parâmetro e, que representa o evento de submissão do formulário.
        e.preventDefault() //Isso previne o comportamento padrão do formulário, que é recarregar a página quando submetido.

        // selecionam os elementos HTML com as classes .nome, .sobrenome, .peso e .altura dentro do formulário e armazenam-nos em constantes. 
        const nome = form.querySelector('.nome')
        const sobrenome = form.querySelector('.sobrenome')
        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura')

        pessoas.push({
            nome: nome.value, 
            sobrenome: sobrenome.value, 
            peso: peso.value, 
            altura: altura.value})

       resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`
       console.log(pessoas)
    }

    // addEventListener = escutador de eventos
    form.addEventListener ('submit', recebeEventoForm) //  Aqui é onde o evento de submissão do formulário é escutado. Quando o formulário é submetido, a função recebeEventoForm é chamada para lidar com o evento.
    
}

enviarInformacoes()