import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a word: ', async (word) => {
  const module = await import('./stringUtils.js');
  const capitalized = module.capitalize(word);
  console.log('Capitalized:', capitalized);
  rl.close();
});
