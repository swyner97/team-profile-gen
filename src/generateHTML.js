let generateEngineer = (Engineer) => {
  return `
<div class="card">
      <div class="media-content">
        <p class="title is-4">${Engineer.name}</p>
        <p class="subtitle is-6">Github: @${Engineer.github}</p>
      </div>
    </div>

    <div class="content">
     <ul>
     <li>
        Email: ${Engineer.email}
     <li>
     <li>
        Identification Number: ${Engineer.id}
     <li>
     <ul>
    </div>
  </div>
</div>`
};

let generateIntern = (Intern) => {
  return `
    <div class="card">
      <div class="media-content">
        <p class="title is-4">${Intern.name}</p>
        <p class="subtitle is-6">School: ${Intern.school}</p>
      </div>
    </div>

    <div class="content">
     <ul>
     <li>
        Email: ${Intern.email}
     <li>
     <li>
        Identification Number: ${Intern.id}
     <li>
     <ul>
    </div>
  </div>
</div>`
};

let generateManager = (Manager) => {
  return `
    <div class="card">
      <div class="media-content">
        <p class="title is-4">${Manager.name}</p>
        <p class="subtitle is-6">Office Number:${Manager.school}</p>
      </div>
    </div>

    <div class="content">
     <ul>
     <li>
        Email: ${Manager.email}
     <li>
     <li>
        Identification Number: ${Manager.id}
     <li>
     <ul>
    </div>
  </div>
</div>`
}


generateHTML = (team) => {
  arr = []

  for (let i = 0; i < team.length; i++) {
    const employee = team[i];
    const role = employee.getRole();

    if (role === "Intern") {
      const internCard = generateIntern(employee);
      arr.push(internCard);
    };

    if (role === "Engineer") {
      const engineerCard = generateEngineer(employee);
      arr.push(engineerCard);
    };

    if (role === "Manager") {
      const managerCard = generateManager(employee);
      arr.push(managerCard);
    };
  }

  const cards = arr.join("");

  console.log(cards);

  let generateTeam = generateTeamCard(cards);
  return generateCard
};

const generateTeamCard = function(cards) {
  return `
  <!doctype html>
  <html lang="en">
    <head>
      <!-- Required meta tags -->
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <!-- Font Awesome Icon -->
      <script src="https://kit.fontawesome.com/a4ff3ab2fb.js" crossorigin="anonymous"></script>
      <!-- Bootstrap CSS -->
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
      <link rel="stylesheet" href="./style.css">
      <title>Team Profile Generator</title>
    </head>
    <body>
        
          <!-- NavBar -->
  <div id="header">
      <h1>My Team</h1>
  </div>
      <!-- Cards -->
  <div class="row mt-5 mb-5" id="cards">
  ${cards}
  </div>
  `
  }



module.exports = generateHTML;