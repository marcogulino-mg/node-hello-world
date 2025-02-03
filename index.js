//Importo il modulo "chalk"
import chalk from "chalk";

//Stampo la stringa nella console
console.log(
  chalk.bgBlack.bold.underline(
    `${chalk.blue("Hello")} ${chalk.red("Boolean")}${chalk.green("!")}`
  )
);
