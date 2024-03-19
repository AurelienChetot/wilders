const chalk = require('chalk');
let information = ["Fanny", "Aurélien", "Laurent", "Simon"];

console.log(chalk.yellow("Hello World!"));
console.log(chalk.blue(`Hello ${information[0]}`));
console.log(chalk.red(`Hello ${information[1]}`));
console.log(chalk.green(`Hello ${information[2]}`));
console.log(chalk.magenta(`Hello ${information[3]}`));