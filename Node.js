const fs = require('fs');

const inputFile = 'input.txt';
const outputFile = 'output.txt';

fs.readFile(inputFile, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading ${inputFile}: ${err}`);
    return;
  }

  const result = data.toUpperCase();

  fs.writeFile(outputFile, result, 'utf8', (err) => {
    if (err) {
      console.error(`Error writing to ${outputFile}: ${err}`);
      return;
    }

    console.log(`Operation completed successfully. Result written to ${outputFile}`);
  });
});