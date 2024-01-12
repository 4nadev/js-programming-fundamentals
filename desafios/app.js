 let dayWeek = prompt('Qual o dia da semana ?');
 if (dayWeek == 'Sabado' || dayWeek == 'Domingo'){
     alert('Bom fim de semana!')
 } else {
     alert('Boa semana!')
 }

 let numberType = Number(prompt('digite um numero positivo ou negativo'));
 if(numberType > 0) {
 alert('Seu numero é positivo');
 } else if (numberType < 0) {
     alert('Seu numero é negativo');
 }else{
     alert('Isso não é um numero ou não é negativo nem positivo');
 }



 let point = Number(prompt('Digite sua pontuação'))
 if (point >= 100){
     alert('Parabéns, você venceu!');
 } else {
     alert('tente novamante para ganhar');
 }


 let saldo = 100;
 let nome = prompt('Digite seu nome');

 alert(`Ola ${nome} seu saldo é ${saldo}, bem vindo`);




// // let qtdNumeros = prompt('Digite a quantidade de números para o cálculo da média:');
// // let soma = 0;
// // let contador = qtdNumeros;

// // while(contador > 0){
// //     let numero = parseInt(prompt('Digite o numero:'));
// //     soma += numero;
// //     contador--;
// // }

// // let media = soma / qtdNumeros;

// // console.log(media);

// // let contador = 1;

// // while(contador <= 10){
// // console.log(`Foi incrementado ${contador}`)
// // contador++;
// // }

// // let contador = 10;

// // while(contador >= 0){
// //     console.log(`Foi decrementado ${contador}`)
// //     contador--;
// // }

// // let contador = Number(prompt('digite um numero para a contagem regressiva'));

// // while(contador >= 0){
// //     console.log(` ${contador}`)
// //     contador--;
// // }


// // let numeroMaximo = prompt("Digite um número para a contagem progregressiva:");
// // let contador = 0;

// // while (contador <= numeroMaximo) {
// //     console.log(contador);
// //     contador++
// // }
