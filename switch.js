//exercicio-1

const mensagemDeBoasVindas1 = "Bem vindo Dev";
const mensagemDeBoasVindas2 = "Bem vindo aluno Logistica ";
const mensagemDeBoasVindas3 = "Bem vindo Adm"
const mensagemGeral = "Bem vindo aluno"

let curso = 'Desenvolvimento de Sistemas';

switch(curso){
    case 'Dev':
    console.log(mensagemDeBoasVindas1)
break;
    case 'Logistica':
    console.log(mensagemDeBoasVindas2)
break;
    case 'Adm':
break;
    default:
    console.log(mensagemGeral)
    break;
}


//exercicio-2

let num1 = 18;
let num2 = 18;
let operação = "*";

let mensagemErro = "Escolha uma opção válida";

switch(operação) {
    case "+":
        console.log(num1 + num2);
 break;
    case "-":
        console.log(num1 - num2);
  break;
    case "*":
        console.log(num1 * num2);
  break;
    case "/":
        console.log(num1 / num2);  
    break;
    default:
        console.log(mensagemErro);  
    break;
}



//exercicio-3

let idade = 11;
let mensagemDeVida1 = "Você é criança ainda";
let mensagemDeVida2 = "É amigão a idade não volta mais, você já é adulto";

switch(true) {
    case (idade <= 18): 
        console.log(mensagemDeVida1);
        break;
    case (idade >= 18): 
        console.log(mensagemDeVida2);
        break;
    default:
        console.log("Idade inválida");
        break;
}


//exercicio-4

let nota = 10;

mensagemDoResultado1 = "Insuficiente";
mensagemDoResultado2 = "Regular";
mensagemDoResultado3 = "Bom";
mensagemDoResultado4 = "Excelente";

switch(nota){
    case  (nota <=5):
    console.log(mensagemDoResultado1);
break;
    case (nota  >=6 && nota <=7):
    console.log(mensagemDoResultado2);
break;
    case (nota >=8 && nota <=9):
    console.log(mensagemDoResultado3);
break;
    case (nota =10):
    console.log(mensagemDoResultado4);
break;
    default:
    console.log("Nota inválida");
break;
}


//exercicio-5

let dia = 2;

switch(dia){
    case (dia =1):
    console.log("Hoje é Domingo");
break;
    case (dia =2):
    console.log("Hoje é segunda-feira");
break;
    case (dia =3):
    console.log("Hoje é terça-feira");
break;
    case (dia =4):
    console.log("Hoje é quarta-feira");
break;
    case (dia =5):
    console.log("Hoje é quarta-feira");
break;
    case (dia =6):
    console.log("Hoje é sexta-feira finalmente!!!!");
break;
    case  (dia =7):
    console.log("Hoje é sabádo uffa!!!")
break;
   default:
   console.log("Dia inválido");
break;
}


//exercicio-6

let calendário = "Festa junina";

switch(calendário){
    case  (calendário = "Festa junina"):
    console.log("Pula fogueira ai ai");
break;
    case (calendário = "Semana da Tecnologia"):
    console.log("Feira de Profissiões");
break;
    case (calendário = "Semana da Saúde"):
    console.log("Vamos nos cuidar");
break; 
    default:
    console.log("Semana normal");
}


//exercicio-7

let mes = 8;

switch(mes){
    case (mes =1):
    console.log("Janeiro");
break;
    case (mes =2):
    console.log("Fevereiro");
break;
    case  (mes =3):
    console.log("Março");
break;
    case (mes =4):
    console.log("Abril");
break;
    case (mes =5):
    console.log("Maio");
break;
    case (mes =6):
    console.log("Junho");
break;
    case (mes =7):
    console.log("Julho");
break;
    case (mes =8):
    console.log("Agosto");
break;
    case (mes =9):
    console.log("Setembro");
break;
    case  (mes =10):
    console.log("Outubro");
break;
    case (mes =11):
    console.log("Novembro")
break;
    case (mes =12):
    console.log("Dezembro")
break;
    default:
    console.log("Mes invalido")
break;
}


//exercicio-8

let estações = 1;

switch(estações){
    case ( estações =1):
    console.log("Verão");
break;
    case (estações =2):
    console.log("Outono");
break;
    case ( estações =3):
    console.log ("Inverno");
break;
    case ( estações =4):
    console.log ("Primavera");
break;
    default:
    console.log("Estação invalida");
break;
}


//exercicio-9

let transform = 100;
let Distancia = 5;
switch (transform){
    case (100):
        console.log(`${Distancia * transform}`);
        break;
    case (1000):
        console.log(`${Distancia * transform}`);
        break;
    case (0.100):
        console.log(`${Distancia * transform}`);
}


//exercicio-10

let nota1 = 'B'; 

switch(nota1) {
    case "A":
        console.log("Nota 9 - 10");
        break;
    case "B":
        console.log("Nota 7 - 8,9");
        break;
    case "C":
        console.log("Nota 4 - 6,7");
        break;
    case "F": 
        console.log("Nota 0 - 3,4");
        break;
    default:
        console.log("Nota inválida");
}


//exercicio-11

real = 12;
switch(real){
    case(real):
    console.log(`${real * 5.71}`);
} 


//exercicio-12

let tpcurso = "Técnico";

switch (tpcurso) {
    case "Técnico":
    console.log(tpcurso =  "Técnico");
break;
    case "Superior":
    console.log( tpcurso =  "Superior");
break;
    case "Expansão":
    console.log(tpcurso = "Expansão");
break;
    default:
    console.log("Tipo de curso inválido");
break;
}


//exercicio-13

let prioridade = 3;

switch(prioridade){
    case 1:
    console.log("Baixa");
break;
    case 2:
    console.log("Média");
break;
    case 3:
    console.log("Alta");
break;
    default:
    console.log("Prioridade inválida");
}


//exercicio-14

let peso = 60;
let altura = 1.75;

let imc = peso / (altura * altura);


switch (true) {
case (imc < 18.5):
    console.log(`Seu IMC é: ${imc} - Baixo peso`);
    break;
case (imc < 24.9):
    console.log(`Seu IMC é: ${imc} - Peso normal`);
    break;
case (imc < 29.9):
    console.log(`Seu IMC é: ${imc} - Sobrepeso`);
    break;
    case (imc > 29.9):
    console.log(`Seu IMC é: ${imc} - Obesidade`);
    break;
}


//exercicio-15

let RgE = 11;
let mensagemDeVida11 = "Numero do  RG Tem 9 digitos";
let mensagemDeVida12 = "Numero do  CPF Tem 11  digitos";
let mensagemDeVida13 = "Numero do  Passaporte Tem 6  digitos";

switch(true) {
    case (RgE = 9): 
        console.log(mensagemDeVida11);
        break;
    case (RgE = 9): 
        console.log(mensagemDeVida12);
        break;
        case  (RgE = 6): 
        console.log(mensagemDeVida13);
        break;
}

//exercicio-16

let passagem = 2.20;

switch(passagem){
    case (passagem =2.20):
    console.log("Estudante");
break;
    case (passagem = 4.40):
    console.log("Trabalhador");
break;
    case (passagem = 0):
    console.log("Idoso");
break;
    default:
    console.log("Bilhete invalido");
break;
}


//exercicio-17

let segundos = 55;

switch(true){
   case (segundos >=50 && segundos <= 59):
   console.log("Muito lento");
break;
   case (segundos > 30 && segundos < 50):
   console.log("Lento");
break;
    case (segundos >20 && segundos  < 30):
    console.log("Moderado");
break; 
    case (segundos  > 10 && segundos < 20):
    console.log("Rápido");
break;
    default:
    console.log("Velocidade não encontrada");
break;
}


//exercicio-18

let deficiencia = "Visual";

switch(deficiencia){
    case (deficiencia = "Visual"):
    console.log("Cão Guia, Bengala");
break;
    case (deficiencia = "Auditiva"):
    console.log("Libras");
break;
    case (deficiencia = "Motora"):
    console.log("Acompanhamento particular ")
}


//exercicio-19

let usuario = 90;

switch(true){
    case (usuario >=100):
    console.log("A");
break;
    case  (usuario >=80 && usuario <= 90):
    console.log("B");
break;
    case (usuario >=70 && usuario < 80):
    console.log("C");
break;
    case (usuario >=60 && usuario < 70):
    console.log("D");
break;
    case (usuario >= 0 && usuario < 60):
    console.log("F");
break;
    default:
    console.log("Nota invalida");
break;
}


//exercicio-20

let clima = "Nublado";

switch(clima){
    case (clima = "Sol"):
    console.log("UFAA aproveite o dia quente");
break;
    case (clima ="Nublado"):
    console.log("É sei não viu!!");
break;
    case  (clima = "Chuva"):
    console.log("É amigão não é hoje");
break;
    default:
    console.log("Clima invalido");
break;
}