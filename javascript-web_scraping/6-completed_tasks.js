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
        acc[task.userId] = (acc[task.userId] || 0) + 1;
        return acc;
      }, {});

    // Create an object with counts for users who have completed tasks
    const usersWithCompletedTasks = Object.keys(completedTasks)
      .filter(userId => completedTasks[userId] > 0)
      .reduce((acc, userId) => {
        acc[userId] = completedTasks[userId];
        return acc;
      }, {});

    console.log(JSON.stringify(usersWithCompletedTasks));
  } else {
    console.log(`Error: ${response.statusCode}`);
  }
});
