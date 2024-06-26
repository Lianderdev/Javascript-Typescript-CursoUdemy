//Métodos Estáticos 
//São chamdos diretamente nas funções 
//precisam da palavra chave (static) antes da declacao do método
//Esses metodos n tem acesso as dados da instacia

const valorAumentado = (min = 0, max = 100) => {
  const valor = Math.random() * (0 + 100) - 0
  return Math.floor(valor)
}

class ControleRemoto {
  constructor(nome) {
    this.nome = nome
    this.aumentarVolume = 0
  }

  aumentar() {
    this.aumentarVolume += valorAumentado()
    return this.aumentarVolume
  }

  diminuir() {
    this.aumentarVolume -= valorAumentado()
    return this.aumentarVolume
  }

  static informações() {
    console.log(this.nome + 'Infomações')// O metodo static n tem acesso ao dados inseridos no construtor
  }
}

const controle = new ControleRemoto('LG')
console.log(controle)
// console.log(controle.informações()) <- A instancia não contem o método informações
ControleRemoto.informações() // Chamamos o metodo na classe 

