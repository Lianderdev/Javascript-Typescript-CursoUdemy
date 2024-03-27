const body = getComputedStyle(document.body);
const backgroundColorBody = body.backgroundColor;
const paragrafos = document.querySelectorAll('.p')

for (let i of paragrafos){
    i.style.backgroundColor = backgroundColorBody
    i.style.color = 'rgb(28, 66, 96)'
}