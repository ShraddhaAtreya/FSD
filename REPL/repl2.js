import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let nums = [];

function getInput(i) {
  if (i < 3) {
    rl.question(`Enter number ${i + 1}: `, (ans) => {
      nums.push(Number(ans));
      getInput(i + 1);
    });
  } else {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
    }
    console.log(`Sum = ${sum}`);
    rl.close();
  }
}

getInput(0);
