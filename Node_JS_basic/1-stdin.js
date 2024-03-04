const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  console.log('Welcome to Holberton School, what is your name?');
  
  readline.on('line', (input) => {
    console.log(`Your name is: ${input}`);
    console.log('This important software is now closing');
    readline.close();
  });
