import * as readlineSync from 'readline-sync';

let opcaoNum: number;

do {
  console.log("\nMenu de Opções:");
  console.log("1 - Criar um cadastro");
  console.log("2 - Excluir um cadastro");
  console.log("3 - Atualizar um cadastro");
  console.log("4 - Listar cadastros");

  const opcao = readlineSync.question("Escolha uma alternativa (1-4): ");
  opcaoNum = parseInt(opcao);

  switch (opcaoNum) {
    case 1:
      console.log("Você escolheu: Criar um cadastro");
      break;
    case 2:
      console.log("Você escolheu: Excluir um cadastro");
      break;
    case 3:
      console.log("Você escolheu: Atualizar um cadastro");
      break;
    case 4:
      console.log("Você escolheu: Listar cadastros");
      break;
    default:
      console.log("Opção inválida. Por favor, escolha entre 1 e 4.");
  }
} while (opcaoNum < 1 || opcaoNum > 4);

