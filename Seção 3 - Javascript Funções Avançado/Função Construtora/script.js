// Função Construtora -> retorna Objeto
// Construtora -> Pessoa (new)

function Pessoa(nome, sobrenome) {

    //Privadas
    const ID = 234762472;
    const metodoInterno = () => {
        console.log(ID)
    }
    metodoInterno()

    //Publicos 
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.falaNome = () => {
        return `Olá ${this.nome}!`
    }
}

const p1 = new Pessoa('Liander', 'Souza');
const p2 = new Pessoa('Veronica', 'Costa')
console.log(p2.falaNome());
