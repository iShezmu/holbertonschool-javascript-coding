#!/usr/bin/node
const request = require('request');
const apiUrl = process.argv[2];

request(apiUrl, (error, response, body) => {
  if (error) {
    return console.error(error);
  }

  if (response.statusCode === 200) {
    const films = JSON.parse(body).results;
    const wedgeFilmsCount = films.filter(film => film.characters.includes('https://swapi.dev/api/people/18/')).length;

    console.log(wedgeFilmsCount); // Print the count to the console
  } else {
    console.log(`Error: ${response.statusCode}`);
  }
});
