const axios = require('axios');

async function getTeams(year, k) {
  const teamsResponse = [];
  for (let index = 1; index <= 13; index++) {
    const { data } = await axios.get(
      `https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League&year=${year}&page=${index}`
    );
    teamsResponse.push(data.data);
  }
  const teams = [];
  teamsResponse.flat().forEach((element) => {
    teams.push(element.team1);
    teams.push(element.team2);
  });

  const objTeams = {};
  teams.forEach(function (item, index, array) {
    if (array.indexOf(item) !== index) {
      if (!objTeams[item]) {
        objTeams[item] = 1;
      }
      objTeams[item] += 1;
    }
  });

  const responseTeams = [];
  for (const team in objTeams) {
    if (objTeams[team] >= k) {
      responseTeams.push(team);
    }
  }

  console.log(responseTeams.sort());
  // write your code here
  // API endpoint template: https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League&year=<YEAR>&page=<PAGE_NUMBER>
}

getTeams(2012, 6);
