alert('Boas vindas ao App, vamos jogar?');

let name = prompt('Qual o seu nome ?');

let tentativa = prompt('Escolha um numero entre 1 e 33');

let numberSecret = '33';

let tentativas = 1;

while (numberSecret != tentativa) {
	
	if (numberSecret == tentativa) {
		alert(`Você descobriu o numero secreto ${numberSecret}  com ${tentativas} tentativas`);
	} else {
        tentativa = prompt('Tente novamente');
		if (tentativa > numberSecret) {
			alert(` O numero secreto é menor que ${tentativa}`);
		} else {
			alert(` O numero secreto é maior que  ${tentativa}`);
		}
	}
    tentativas++

}





let qtdNumeros = prompt('Digite a quantidade de números para o cálculo da média:');
let soma = 0;
let contador = qtdNumeros;

while(contador > 0){
    let numero = parseInt(prompt('Digite o numero:'));
    soma += numero;
    contador--;
}

let media = soma / qtdNumeros;

console.log(media);

let contador = 1;

while(contador <= 10){
console.log(`Foi incrementado ${contador}`)
contador++;
}

let contador = 10;

while(contador >= 0){
    console.log(`Foi decrementado ${contador}`)
    contador--;
}

let contador = Number(prompt('digite um numero para a contagem regressiva'));

while(contador >= 0){
    console.log(` ${contador}`)
    contador--;
}


let numeroMaximo = prompt("Digite um número para a contagem progregressiva:");
let contador = 0;

while (contador <= numeroMaximo) {
    console.log(contador);
    contador++
}
