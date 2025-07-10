import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let numbers = [];

function ask(index) {
  if (index < 5) {
    rl.question(`Enter number ${index + 1}: `, (answer) => {
      numbers.push(Number(answer));
      ask(index + 1);
    });
  } else {
    console.log("\nNumbers entered:");
    for (let num of numbers) {
      console.log(num);
    }
    rl.close();
  }
}

ask(0);
