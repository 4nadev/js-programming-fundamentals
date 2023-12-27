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