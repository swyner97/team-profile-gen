const generateTeam = team => {
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
};

const html = [];

html.push(team
  .filter(employee=> employee.getRole() === 'Manager')
  .map(manager => generateManager(manager))
  );

  html.push(team
    .filter(employee=> employee.getRole() === 'Engineer')
    .map(engineer => generateEngineer(engineer))
    );

    html.push(team
      .filter(employee=> employee.getRole() === 'Intern')
      .map(intern => generateIntern(intern))
      );

      return html.join('');
};

module.exports= team => {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">r
      <title>Document</title>
  </head>
  <body>
  
      <div>
          ${generateTeam(team)}
      </div>
      
  
      
  </body>
  </html>`
};
