/*Questão 1: Controle de Acesso
Crie um objeto usuario com as propriedades nome e senha. 
Use um getter para retornar o nome e um setter para validar a senha. 
A senha deve ter no mínimo 8 caracteres. */

const usuario = {
    nome: 'liander',
    senha: 'souza13',
    get mostraNome() {
        return this.nome
    },
    set validaSenha(senha) {
        senha.length >= 8 ? this.senha = senha : 'Senha invalida'
    }
}

console.log(usuario.mostraNome)