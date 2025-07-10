import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let arr = [];

function getInput(i) {
  if (i < 5) {
    rl.question(`Enter number ${i + 1}: `, (ans) => {
      arr.push(Number(ans));
      getInput(i + 1);
    });
  } else {
    let evens = arr.filter(num => num % 2 === 0);
    console.log("Even numbers are:", evens);
    rl.close();
  }
}

getInput(0);
