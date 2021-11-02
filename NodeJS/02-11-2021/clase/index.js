const chalk = require('chalk');

const youShouldNeverUseVar = 'This is my very long line that eslint should check as an error............................................';

function myFunction(used) {
  if (used) {
    console.log(used);
  }
}
function nonExistingVar() {
  console.log(chalk.blue(youShouldNeverUseVar));
}
module.exports = nonExistingVar;
