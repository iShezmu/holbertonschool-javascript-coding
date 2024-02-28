#!/usr/bin/node
const request = require('request');
const apiUrl = process.argv[2];

request(apiUrl, (error, response, body) => {
  if (error) {
    return console.error(error);
  }

  if (response.statusCode === 200) {
    const films = JSON.parse(body).results;
    const wedgeFilms = films.filter((film) => {
      return film.characters.includes('https://swapi-api.hbtn.io/api/people/18/');
    }).length;

    console.log(wedgeFilms);
  } else {
    console.log(`Error: ${response.statusCode}`);
  }
});
