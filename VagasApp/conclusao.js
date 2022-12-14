let jobs = [];
let option = "";

function mainMenu() {
  option = prompt(
    `Bem vindo ao sistema de vagas de emprego.
Selecione uma das opções a seguir:

1. Mostrar vagas: (Cadastradas: ${jobs.length})
2. Criar nova vaga.
3. Visualizar uma vaga.
4. Inscrever candidato em uma vaga.
5. Excluir vaga.
6. Sair`
  );
  return option;
}

function createJobVacancy() {
  let newJob = {};
  newJob.name = prompt("Digite o nome da vaga:");
  newJob.description = prompt("Digite a descricao da vaga:");
  newJob.deadline = prompt("Digite a data limite: (Ex: 12/2022)");
  newJob.registeredCandidates = [];
  console.log(newJob);

  let confirmation = confirm(
    "Deseja confirmar o preenchimento da nova vaga?\n\n" +
      "Vaga: " +
      newJob.name +
      ".\n" +
      "Descrição: " +
      newJob.description +
      ".\n" +
      "Data limite: " +
      newJob.deadline +
      "."
  );

  if (confirmation) {
    jobs.push(newJob);
    alert("Vaga cadastrada com sucesso.");
  } else {
    alert("Processo abortado. Voltando ao menu.");
  }
}

function showJobs() {
  let jobsList = "";

  for (i = 0; i < jobs.length; i++) {
    jobsList +=
      i +
      1 +
      ". " +
      jobs[i].name +
      ". Quantidade de inscritos: " +
      jobs[i].registeredCandidates.length +
      ".\n";
  }

  if (jobsList === "") {
    alert("Não há vagas cadastradas.");
  } else {
    alert(jobsList);
  }
}

function showEspecificVacancy() {
  let showBeforeSearch = "";
  for (i = 0; i < jobs.length; i++) {
    showBeforeSearch += i + 1 + ". " + jobs[i].name + ".\n";
  }
  if (showBeforeSearch === "") {
    alert("Não há vagas cadastradas no momento.");
  } else {
    let vacancyToBeSearched = prompt(
      "Lista de vagas cadastradas: \n" +
        showBeforeSearch +
        "\nDigite o número da vaga que quer saber mais detalhes."
    );

    let showCadidatesName = "";
    for (
      i = 0;
      i < jobs[vacancyToBeSearched - 1].registeredCandidates.length;
      i++
    ) {
      showCadidatesName +=
        "\n" +
        (i + 1) +
        ". " +
        jobs[vacancyToBeSearched - 1].registeredCandidates[i] +
        ".";
    }

    if (showCadidatesName === "") {
      showCadidatesName = "Nenhum.";
    }

    alert(
      "A vaga pesquisada foi a de " +
        jobs[vacancyToBeSearched - 1].name +
        ".\n\n" +
        "Mais detalhes: \n" +
        "Descrição da vaga: " +
        jobs[vacancyToBeSearched - 1].description +
        ".\n" +
        "Data limite pra inscrição: " +
        jobs[vacancyToBeSearched - 1].deadline +
        ".\n" +
        "Candidatos cadastrados na vaga: " +
        showCadidatesName
    );
  }
}

function registerCandidate() {
  let showBeforeRegister = "";
  for (i = 0; i < jobs.length; i++) {
    showBeforeRegister += i + 1 + ". " + jobs[i].name + ".\n";
  }
  if (showBeforeRegister === "") {
    alert("Não há vagas cadastradas no momento.");
  } else {
    let jobToBeFilled = prompt(
      "Lista de vagas cadastradas: \n" +
        showBeforeRegister +
        "\nDigite o número da vaga para qual deseja registrar novo candidato."
    );
    let newCandidate = {};
    newCandidate.name = prompt("Qual o nome do candidato?");
    jobs[jobToBeFilled - 1].registeredCandidates.push(newCandidate.name);
    alert(
      "Candidato registrado com sucesso na vaga de " +
        jobs[jobToBeFilled - 1].name +
        "."
    );
  }
}

function deleteJob() {
  let showBeforeDelete = "";
  for (i = 0; i < jobs.length; i++) {
    showBeforeDelete += i + 1 + ". " + jobs[i].name + ".\n";
  }
  if (showBeforeDelete === "") {
    alert("Não há vagas cadastradas no momento.");
  } else {
    let jobToBeDeleted = prompt(
      "Lista de vagas cadastradas: \n" +
        showBeforeDelete +
        "\nDigite o número da vaga que deseja excluir."
    );
    if (jobs[jobToBeDeleted - 1].registeredCandidates.length !== 0) {
      let deleteProblem = confirm(
        "Existem candidatos cadastrados nessa vaga. \nTem certeza que deseja excluir a vaga?"
      );
      if (deleteProblem) {
        jobs.splice(jobToBeDeleted - 1, 1);
        alert("Vaga excluída com sucesso");
      } else {
        alert("Processo cancelado pelo usuário");
      }
    } else {
      jobs.splice(jobToBeDeleted - 1, 1);
      alert("Vaga excluída com sucesso");
    }
  }
}

do {
  mainMenu();

  switch (option) {
    case "1":
      showJobs();
      break;

    case "2":
      createJobVacancy();
      break;

    case "3":
      showEspecificVacancy();
      break;

    case "4":
      registerCandidate();
      break;

    case "5":
      deleteJob();
      break;

    case "6":
      alert("Saindo...");
      break;

    default:
      alert("Opção inválida.");
  }
} while (option !== "6");
