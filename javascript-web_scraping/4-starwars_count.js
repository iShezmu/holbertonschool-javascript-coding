#!/usr/bin/node
const request = require('request');
const apiUrl = process.argv[2]; // The first argument from the command line

request(apiUrl, (error, response, body) => {
  if (error) {
    return console.error('Error:', error); // Print any error that occurs during the request
  }

  if (response.statusCode === 200) {
    const films = JSON.parse(body).results;
    const wedgeFilmsCount = films.filter(film =>
      film.characters.includes('https://swapi-api.hbtn.io/api/people/18/')
    ).length;

    console.log(wedgeFilmsCount); // Print the count of films featuring Wedge Antilles
  } else {
    console.log(`Error: ${response.statusCode}`); // Print the response status code if it's not 200
  }
});
