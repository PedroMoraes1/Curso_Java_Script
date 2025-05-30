// Crie um switch que, dado o número do mês (1 a 5), exiba:

// 1: Janeiro
// 2: Fevereiro
// 3: Março
// 4: Abril
// 5: Maio
// Qualquer outro número: “Mês inválido”

let mes = 6;

switch (mes) {
  case 1:
    console.log("Janeiro");
    break;
  case 2:
    console.log("Fevereiro");
    break;
  case 3:
    console.log("Março");
    break;
  case 4:
    console.log("Abril");
    break;
  case 5:
    console.log("Maio");
    break;
  default:
    console.log("Esse não é um mês válido")
    break;
}
