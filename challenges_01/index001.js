// Create a program that uses console.log to display a welcome message.
console.log('Hello World');

//Create a variable called "name" and give it your name. Then use console.log to display the message "Hello, [your name]!" in the browser console.
let name = 'Ana Maria';
console.log(`Olá, ${name}`);

//Create a variable called "name" and give it your name. Then use the alert to display the message "Hello, [your name]!" .
let nome = 'Ana Maria';
// alert(`Olá, ${nome}`);

//Use the prompt and ask the following question: What programming language do you like most? Then store the response in a variable and show it in the browser console.
// var langLike = prompt('What programming language do you like most?');
// console.log(langLike);

//Create a variable called "value1" and another called "value2", assigning them numeric values ​​of your choice. Then, add these two values ​​and store the result in a third variable called "result". Use console.log to display the message "The sum of [value1] and [value2] is equal to [result]." in the console.
let value1 = 2;
let value2 = 3;
let result = value1 + value2;
console.log(`A soma de  ${value1} e  ${value2} é igual a  ${result}`);

//Ask user to enter their age with prompt. Based on the age entered, use an if to check whether the person is older or younger, displaying an appropriate message in the console.
// let age = prompt('insira sua idade');
// if(age <= 18 ){
//     console.log('Você é menor de idade');
// } else {
//     console.log('Você é maior de idade');
// }

//Create a variable "number" and ask for a value with prompt check if it is positive, negative or zero. Use if-else to print the respective message.
// var number = prompt('Digite um numero');
var number = 1;
if (number >= 0) {
	console.log('Seu numero é positivo');
} else if (number <= 0) {
	console.log('Seu numero é negativo');
} else {
	console.log('O seu numero não é negativo e nem positivo');
}

// Use a while loop to print the numbers 1 to 10 to the console.
let numberContador = 1;

while (numberContador <= 10) {
	console.log(numberContador);
	numberContador++;
}

//Create a variable "grade" and assign a numeric value to it. Use if-else to determine whether the grade is greater than or equal to 7 and display "Pass" or "Fail" in the console.
 let grade = 4;
  if (grade >= 7){
    console.log('Aprovado');
} else {
    console.log('Reprovado');
}

//Use Math.random to generate any random number and display that number in the console.
console.log(Math.random())


//Use Math.random to generate an integer between 1 and 10 and display that number in the console.
console.log(Math.floor(Math.random() * 10))


//Use Math.random to generate an integer between 1 and 1000 and display that number in the console.
console.log(Math.floor(Math.random() * 1000))