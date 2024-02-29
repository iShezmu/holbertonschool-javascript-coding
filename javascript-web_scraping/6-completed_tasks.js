#!/usr/bin/node
const request = require('request');
const apiUrl = process.argv[2];

request(apiUrl, (error, response, body) => {
  if (error) {
    return console.error('Error:', error);
  }

  if (response.statusCode === 200) {
    const todos = JSON.parse(body);
    const completedTasks = todos
      .filter(task => task.completed)
      .reduce((acc, task) => {
        if (acc[task.userId]) {
          acc[task.userId] += 1;
        } else {
          acc[task.userId] = 1;
        }
        return acc;
      }, {});

    // Only print users with completed tasks
    for (const user in completedTasks) {
      if (completedTasks[user]) {
        console.log(`${user}: ${completedTasks[user]}`);
      }
    }
  } else {
    console.log(`Error: ${response.statusCode}`);
  }
});
