const API_KEY = '76380b89db7044159a202bdec081fca9';
const base_url = "https://api.football-data.org/v2/competitions/WC/";
const standings = `${base_url}standings?standingType=TOTAL`;
const matches = `${base_url}matches?status=FINISHED`;
const teams = `${base_url}teams`;

const fetchApi = url => {
    const options = {
      headers: {
        'X-Auth-Token': API_KEY
      }
    }
    return fetch(url, options);
}

const status = response => {
  if (response.status !== 200) {
    console.log("Error : " + response.status);
    return Promise.reject(new Error(response.statusText));
  } else {
    return Promise.resolve(response);
  }
}

const json = response => {
  return response.json();
}

const error = error => {
  console.log("Error: " + error);
}

const getStandings = () => {
  return fetchApi(standings)
                           .then(status)
                           .then(json);
}

const getMatches = () => {
  return fetchApi(matches)
                          .then(status)
                          .then(json);
}

const getTeams = () => {
  return fetchApi(teams)
                        .then(status)
                        .then(json);
}

module.exports = {
  getMatches,
  getStandings,
  getTeams
}