const PesonagemMorreu = (dano, saude) => dano >= saude ? 'morreu otario !' : 'Por sorte ainda esta vivo !'
const result = PesonagemMorreu (100, 100) 
console.log(result)