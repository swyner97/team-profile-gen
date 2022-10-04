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


teamArr = (team) => {
    arr = [];

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

    const cards = arr.join("")

    console.log(cards);
    
    let generateTeam = generateCard(cards);
    return generateCard
};



module.exports = generateHTML;