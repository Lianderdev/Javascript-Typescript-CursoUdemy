function saudacao(saudacao, pontuacao) {
    console.log(`${saudacao}, ${this.nome} ${pontuacao}`)
}

const pessoa1 = {
    nome: 'liander'
}

saudacao.apply(pessoa1, ['olá', '!'])
saudacao.call(pessoa1, 'o', '!')

const saudacao2 = saudacao.bind(pessoa1, 'Boa tarde', 'Meu bebé')
saudacao2('oi', '!')

const Liander = {
    nome: 'liander',
    esporte: ['futebol', 'basquete', 'Vôlei'],
    MostraNome() {
        let that = this
        this.esporte.forEach(function(sport) {
            console.log(that.nome, sport)
        },);
    }
}

Liander.MostraNome()