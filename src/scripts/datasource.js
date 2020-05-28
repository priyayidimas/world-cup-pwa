const api = require("./api");
const db = require("./db");
let favId = [];

const showPreLoader = () => {
    document.getElementById("loading").classList.remove("hide");
}
  
const hidePreLoader = () => {
    document.getElementById("loading").classList.add("hide");
}

const showStanding = () => {
    showPreLoader();
    api.getStandings().then(data => {
  
      const str = JSON.stringify(data).replace(/http:/g, 'https:');
      data = JSON.parse(str);
  
      let html = '';
      let winner = '';
      data.standings.forEach(standing => {
        let detail = ''
        standing.table.forEach(row => {
          detail += `
            <tr>
              <td>${row.position}</td>
              <td><img class="responsive-img" width="90" height="60" src="${ row.team.crestUrl || 'assets/images/placeholder.jpeg'}"></td>
              <td>${row.team.name}</td>
              <td>${row.playedGames}</td>
              <td>${row.won}</td>
              <td>${row.draw}</td>
              <td>${row.lost}</td>
              <td>${row.goalsFor}</td>
              <td>${row.goalsAgainst}</td>
              <td>${row.goalDifference}</td>
              <td>${row.points}</td>
            </tr>`
        });
  
        html += `
            <li>
                <div class="collapsible-header">${standing.group}</div>
                <div class="collapsible-body">
                    <table class="responsive-table striped">
                        <thead>
                            <tr>
                                <th>Position</th>
                                <th>Flag</th>
                                <th>Team</th>
                                <th>Played</th>
                                <th>Won</th>
                                <th>Draw</th>
                                <th>Lost</th>
                                <th>GF</th>
                                <th>GA</th>
                                <th>GD</th>
                                <th>Points</th>
                            </tr>
                        </thead>
                        <tbody>` + detail + `</tbody>
                    </table>
                </div>
            </li>
        `;
        winner = `
            <div class="card">
                <div class="card-image">
                    <img src="${data.season.winner.crestUrl || 'assets/images/placeholder.jpeg'}" alt="${data.season.winner.name}" />
                </div>
                <div class="card-content">
                    <span class="card-title">${data.season.winner.name}</span>
                </div>
            </div>
        `;
      });
      document.getElementById("standings").innerHTML = html;
      document.getElementById("winner").innerHTML = winner;
      hidePreLoader();
    })
}

const showMatches = () => {
    showPreLoader();
    api.getMatches().then(data => {
        let html = '';
        const header = `
            <tr>
                <th>Home Team</th>
                <th>Away Team</th>
                <th>Result</th>
                <th>Winner</th>
            </tr>
        `;
        data.matches.forEach(match => {
            let winner = match.score.winner;
            if(winner === "HOME_TEAM"){
                winner = match.homeTeam.name;
            }else if(winner === "AWAY_TEAM"){
                winner = match.awayTeam.name;
            }
            html += `
                <tr>
                    <td>${match.homeTeam.name}</td>
                    <td>${match.awayTeam.name}</td>
                    <td>${match.score.fullTime.homeTeam} - ${match.score.fullTime.awayTeam}</td>
                    <td>${winner}</td>
                </tr>
            `
        });
        document.getElementById("matches-head").innerHTML = header;
        document.getElementById("matches-body").innerHTML = html;
        hidePreLoader();
    })
}

const showTeams = () => {

    showPreLoader();
    db.getFavoriteTeam().then(teams => {
        favId = [];
        teams.forEach(team => {
            favId.push(team.id);
        })
        api.getTeams().then(data => {
            const str = JSON.stringify(data).replace(/http:/g, 'https:');
            jsonData = JSON.parse(str);
            
            data = jsonData;
            let html = '';
            let teams = data.teams;
            let icon = '';
            html += '<div class="row">';
            
            teams.forEach(async team => {
                if(favId.includes(team.id)){
                    icon = `<i class="material-icons">delete</i>`;
                }else{
                    icon = `<i class="material-icons">star</i>`;
                }
                html += `
                <div class="col s12 m6 l6">
                <div class="card custom">
                    <div class="card-image">
                        <img src="${team.crestUrl || 'assets/images/placeholder.jpeg'}" alt="${team.name}" />
                        <a class="btn-floating halfway-fab waves-effect waves-light red btn-add">${icon}</a>
                    </div>
                    <div class="card-content">
                        <span class="card-title activator">${team.name}</span>
                    </div>
                    <div class="card-reveal">
                        <span class="card-title grey-text text-darken-4">${team.name}<i class="material-icons right">close</i></span>
                        <p>Address:</p>
                        <p>${team.address}</p>
                        <p>Email:</p>
                        <p>${team.email}</p>
                        <p>Phone:</p>
                        <p>${team.phone}</p>
                    </div>
                    <div class="card-action">
                        <a href="${team.website}" target="_blank">Go to website</a>
                    </div>
                </div>
                </div>
            `
            });
            html += "</div>";
            document.getElementById("teams").innerHTML = html;
    
            let btn = document.getElementById("teams").getElementsByClassName("btn-add");
            for(let i = 0; i < btn.length; i++) {
                btn[i].onclick = () => {
                    db.getTeamByKey(teams[i].id).then((count) => {
                        if(count == 0){                        
                            let team = {
                                id: teams[i].id,
                                name: teams[i].name,
                                website: teams[i].website,
                                crestUrl: teams[i].crestUrl,
                                email: teams[i].email,
                                address: teams[i].address,
                                phone: teams[i].phone,
                            }
                            db.addFavoriteTeam(team);
                            btn[i].innerHTML = `<i class="material-icons">delete</i>`;
                            favId.push(teams[i].id);
                        }else{
                            db.delFavoriteTeam(teams[i].id);
                            btn[i].innerHTML = `<i class="material-icons">star</i>`;
                            favId = favId.filter(e => e !== teams[i].id);
                        }
                    });
                }
            }
            hidePreLoader();
        });
    });
}

const showFavTeams = () => {
    showPreLoader();
    const data = db.getFavoriteTeam();
  
    data.then(teams => {
      let html = '';
      html += '<div class="row">';
      if(teams.length == 0){
        html += '<h5 class="center-align">No favorite team found!</h5>';
      }else{
          teams.forEach(team => {
            html += `
            <div class="col s12 m6 l6">
            <div class="card custom">
                <div class="card-image">
                    <img src="${team.crestUrl || 'assets/images/placeholder.jpeg'}" alt="${team.name}" />
                    <a class="btn-floating halfway-fab waves-effect waves-light red btn-del"><i class="material-icons">delete</i></a>
                </div>
                <div class="card-content">
                    <span class="card-title activator">${team.name}</span>
                </div>
                <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4">${team.name}<i class="material-icons right">close</i></span>
                    <p>Address:</p>
                    <p>${team.address}</p>
                    <p>Email:</p>
                    <p>${team.email}</p>
                    <p>Phone:</p>
                    <p>${team.phone}</p>
                </div>
                <div class="card-action">
                    <a href="${team.website}" target="_blank">Go to website</a>
                </div>
            </div>
            </div>
          `
          });
      }
  
      html += "</div>"
      document.getElementById("favteams").innerHTML = html;

      let btn = document.getElementById("favteams").getElementsByClassName("btn-del");
      for(let i = 0; i < btn.length; i++) {
        btn[i].onclick = () => {
          db.delFavoriteTeam(teams[i].id);
          showFavTeams();
          favId = favId.filter(e => e !== teams[i].id);
        }
      }
      hidePreLoader()
    })
}

module.exports = {
    showTeams,
    showStanding,
    showMatches,
    showFavTeams
}