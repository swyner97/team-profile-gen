const generateTeam = team => {
  let generateEngineer = (Engineer) => {
    return `
<div class="card is-flex is-flex-direction-column">
      <div class="media-content">
        <p class="title is-3">${Engineer.name}</p>
          <div class="role is-flex is-flex-direction-row is-align-items-center">
          <img src="./images/engineer-icon.png">
          <p class="subtitle is-5">Engineer</p>
        </div>
      </div>

    <div class="content">
     <ul>
     <li>
        GitHub: <a href="github.com/${Engineer.github}">${Engineer.github}</a>
     </li>
     <li>
     Email: <a href="mailto:${Engineer.email}">${Engineer.email}</a>
     </li>
     <li>
        Identification Number: ${Engineer.id}
     </li>
     </ul>
    </div>
  </div>`
  };

  let generateIntern = (Intern) => {
    return `
    <div class="card is-flex is-flex-direction-column">
      <div class="media-content">
        <p class="title is-3">${Intern.name}</p>
        <div class="role is-flex is-flex-direction-row    is-align-items-center">
          <img src="./images/intern-icon.png"> 
          <p class="subtitle is-5">Intern</p>
          </div>
       
      </div>

      <div class="content">
        <ul>
          <li>
          School: ${Intern.school}
          </li>
          <li>
          Email: <a href="mailto:${Intern.email}">${Intern.email}</a>
          </li>
          <li>
            Identification Number: ${Intern.id}
          </li>
        </ul>
      </div>
  </div>`
  };

  let generateManager = (Manager) => {
    return `
    <div class="card is-flex is-flex-direction-column">
      <div class="media-content">
          <p class="title is-3">${Manager.name}</p>
          <div class="role is-flex is-flex-direction-row is-align-items-center">
          <img src="./images/manager-icon.png">
          <p class="subtitle is-5">Manager</p>
        </div>
      </div>
      <div class="content">
        <ul>
          <li>
          Office Number: ${Manager.office}
          </li>
          <li>
          Email: <a href="mailto:${Manager.email}">${Manager.email}</a>
          </li>
          <li>
            Identification Number: ${Manager.id}
          </li>
        </ul>
      </div>
    </div>`
  };

  const html = [];

  html.push(team
    .filter(employee => employee.getRole() === 'Manager')
    .map(manager => generateManager(manager))
  );

  html.push(team
    .filter(employee => employee.getRole() === 'Engineer')
    .map(engineer => generateEngineer(engineer))
  );

  html.push(team
    .filter(employee => employee.getRole() === 'Intern')
    .map(intern => generateIntern(intern))
  );

  return html.join('');
};

module.exports = team => {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width initial-scale=1.0">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
      <link rel="stylesheet" href="./style.css">
      <title>My Team</title>
  </head>
  <body>
  <header>
  <h1 class = "is-flex is-justify-content-center title is-1">
  My Team
  </h1>
  </header>
  
      <div class = "teams is-flex is-flex-direction-row is-justify-content-space-evenly is-flex-wrap-wrap">
          ${generateTeam(team)}
      </div>
  </body>
  </html>`
};
