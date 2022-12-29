const numeros = [100, 200, 300, 400, 500, 600];

for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}


const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

for (let i = 0; i < notas.length; i++) {
  somaDasNotas += notas[i];
}

const media = somaDasNotas / notas.length;

console.log(`A média das notas é ${media}.`);