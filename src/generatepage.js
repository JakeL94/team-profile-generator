function roleType(data) {
    const cards={
        manager: [],
        engineer:[],
        intern:[]
    }
    for (let i = 0; i < data.length; i++) {
        const role = data[i];
        switch (role.getRole()) {
            case "Manager":
                cards.manager.push(createManager(role))
                break;
            case "Engineer":
                cards.engineer.push(createEngineer(role))
                break;
            case "Intern":
                cards.intern.push(createIntern(role))
                break;
        }
    }
    return cards
}

function createManager(manager) {
    return `
<div class="card" style="width: 20rem;">
    <div class="card-body">
      <h5 class="card-title">${manager.name}</h5>
      <div class="employee-position">
        <span class="oi oi-briefcase"></span>
        ${manager.getRole()}
      </div>
    </div>
    <ul class="list-group">
      <li class="list-group-item">ID: ${manager.id}</li>
      <li class="list-group-item">Email: <a href="${manager.email}">${manager.email}</a></li>
      <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
    </ul>
  </div>`
}

const createEngineer = employee => `
<div class="card col-4" style="width: 20rem;">
    <div class="card-body">
      <h5 class="card-title">${employee.name}</h5>
      <div class="employee-position">
        <span class="oi oi-code"></span>
        ${employee.getRole()}
      </div>
    </div>
    <ul class="list-group">
      <li class="list-group-item">ID: ${employee.id}</li>
      <li class="list-group-item">Email: <a href="${employee.email}">${employee.email}</a></li>
      <li class="list-group-item">GitHub: <a href="https://www.github.com/${employee.gitHub}/">${employee.gitHub}</a></li>
    </ul>
</div>`

const createIntern = employee => `
<div class="card col-4" style="width: 20rem;">
    <div class="card-body">
      <h5 class="card-title">${employee.name}</h5>
      <div class="employee-position">
        <span class="oi oi-code"></span>
        ${employee.getRole()}
      </div>
    </div>
    <ul class="list-group">
      <li class="list-group-item">ID: ${employee.id}</li>
      <li class="list-group-item">Email: <a href="${employee.email}">${employee.email}</a></li>
      <li class="list-group-item">School:${employee.school}</li>
    </ul>
</div>`

function createPage(data) {
    const cards = roleType(data)
    return `
    <!doctype html>
    <html lang="en">
    <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>    
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
    
    <title>Employee Profiles</title>
    </head>
    
    <header>${data[0].name} and their team!</header>
    
    <body>
    
    <h2>Team Manager</h2>
    <div class="container">
        <div class="row">
            <div class="col-12 card-container">
                ${cards.manager}
            </div>
        </div>
    </div>
    
    <h2>Team Members</h2>
    ${cards.engineer.length ? `<h3>Engineers</h3>` : ""}
    <div class="container">
        <div class="row">
            <div class="col-12 card-container">
                ${cards.engineer.join('')}
            </div>
        </div>
    </div>

    ${cards.intern.length ? `<h3>Interns</h3>` : ""}

    <div class="container">
        <div class="row">
            <div class="col-12 card-container">
                ${cards.intern.join('')}
            </div>
        </div>
    </div>

    </body>
</html>`
}

module.exports = createPage;