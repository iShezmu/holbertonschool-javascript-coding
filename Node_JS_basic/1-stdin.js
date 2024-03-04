process.stdin.setEncoding('utf8');

process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  let name = process.stdin.read();
  if (name !== null) {
    name = name.trim(); // Trim the input to remove unexpected whitespace
    process.stdout.write(`Your name is: ${name}\n`); // Use \n for line feed
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
