import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let names = [];

function getName(i) {
  if (i < 3) {
    rl.question(`Enter name ${i + 1}: `, (name) => {
      names.push(name);
      getName(i + 1);
    });
  } else {
    console.log("\nNames you entered:");
    names.forEach((name, index) => {
      console.log(`Name ${index + 1}: ${name}`);
    });
    rl.close();
  }
}

getName(0);
