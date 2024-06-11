const elementos  = [
    {tag: 'p', texto: 'Que'},
    {tag: 'div', texto: 'Coisa'},
    {tag: 'footer', texto: 'Chata'},
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++){
    let { tag, texto} = elementos[i];
    let CriandoTag = document.createElement(tag);
    CriandoTag.innerHTML = texto;
    div.appendChild(CriandoTag);
}

container.appendChild(div);