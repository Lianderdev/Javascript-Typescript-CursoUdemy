// Funções Recursivas

const recursiva = max => {
    console.log(max);
    if (max >= 10) return;
    max++;
    recursiva(max);
}

recursiva(1);