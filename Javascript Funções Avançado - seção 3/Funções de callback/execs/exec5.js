/* Exercício 5: Executando Após um Tempo
Crie uma função executaAposTempo que aceita uma mensagem, um tempo em milissegundos e uma função de callback. 
A função deve chamar o callback passando a mensagem após o tempo especificado.*/

function executaAposTempo (mensagem, tempo, callback) {
    setTimeout(() => {
     return callback(mensagem)
    }, tempo)
}

executaAposTempo('lianer ama veronica', 2000, function(mensagem) {
        console.log(mensagem)
})
