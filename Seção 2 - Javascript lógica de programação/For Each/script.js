const familia = ['Liander', 'Lilia', 'Anderson', 'Veronica']
const familia2 = []

const MostrarFamilia = (familia) => {
    console.log(`Minha familia é composta por ${familia}`)
}

familia.forEach(integrante => {
    MostrarFamilia(integrante)
});

familia.forEach(int => {
    familia2.push(int)
})

console.log(familia2)

const logArrayElements = (element, index /*, array */) => {
    console.log(`a[${index}] = ${element}`);
};
  
[2, 5, undefined , 9].forEach(logArrayElements);