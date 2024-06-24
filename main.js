import inquirer from "inquirer";
import chalk from "chalk";
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuleDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuleIncrease() {
        this.fuel = 100;
    }
}
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuleDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let player = await inquirer.prompt([{
        name: "name",
        type: "input",
        message: chalk.blueBright("***Enter the name of the player***")
    }]);
let opponent1 = await inquirer.prompt([{
        name: "select",
        type: "list",
        message: chalk.greenBright("***Select the opponent***"),
        choices: ["superman", "Badman", "Spedierman"]
    }]);
let p1 = new Player(player.name);
let op2 = new Opponent(opponent1.select);
do {
    if (opponent1.select == "superman") {
        let ask = await inquirer.prompt([{
                name: "select1",
                type: "list",
                message: chalk.magentaBright("***what would you like to select***"),
                choices: ["attack", "drank portion", "run for your life"]
            }]);
        if (ask.select1 == "attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuleDecrease();
                console.log(`${p1.name} fule is ; ${p1.fuel}`);
                console.log(`${op2.name} fule is ; ${op2.fuel}`);
                if (p1.fuel <= 0) {
                    console.log(chalk.redBright("****You have lost the game****"));
                    process.exit();
                }
            }
            if (num <= 0) {
                op2.fuleDecrease();
                console.log(`${p1.name} fule is ; ${p1.fuel}`);
                console.log(`${op2.name} fule is ; ${op2.fuel}`);
                if (op2.fuel <= 0) {
                    console.log(chalk.bgMagentaBright("******You have win the game******"));
                    process.exit();
                }
            }
        }
        if (ask.select1 == "drank portion") {
            p1.fuleIncrease();
            console.log(chalk.bgCyanBright(`congratulation your fule is : ${p1.fuel}`));
        }
        if (ask.select1 == "run for your life") {
            console.log(chalk.bgRedBright("you lose your life and you will lose your energy try again"));
            process.exit();
        }
    }
    // Badman
    if (opponent1.select == "Badman") {
        let ask = await inquirer.prompt([{
                name: "select1",
                type: "list",
                message: chalk.green("what would you like to select"),
                choices: ["attack", "drank portion", "run for your life"]
            }]);
        if (ask.select1 == "attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuleDecrease();
                console.log(`${p1.name} fule is ; ${p1.fuel}`);
                console.log(`${op2.name} fule is ; ${op2.fuel}`);
                if (p1.fuel <= 0) {
                    console.log(chalk.redBright("******You have lost the game******"));
                    process.exit();
                }
            }
            if (num <= 0) {
                op2.fuleDecrease();
                console.log(`${p1.name} fule is ; ${p1.fuel}`);
                console.log(`${op2.name} fule is ; ${op2.fuel}`);
                if (op2.fuel <= 0) {
                    console.log(chalk.bgBlueBright("******You have win the game*******"));
                    process.exit();
                }
            }
        }
        if (ask.select1 == "drank portion") {
            p1.fuleIncrease();
            console.log(chalk.bgCyanBright(`congratulation your fule is : ${p1.fuel}`));
        }
        if (ask.select1 == "run for your life") {
            console.log(chalk.bgRedBright("you lose your life and you will lose your energy try again"));
            process.exit();
        }
    }
    // spiderman
    if (opponent1.select == "Spedierman") {
        let ask = await inquirer.prompt([{
                name: "select1",
                type: "list",
                message: chalk.bgCyan("***what would you like to select***"),
                choices: ["attack", "drank portion", "run for your life"]
            }]);
        if (ask.select1 == "attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuleDecrease();
                console.log(`${p1.name} fule is ; ${p1.fuel}`);
                console.log(`${op2.name} fule is ; ${op2.fuel}`);
                if (p1.fuel <= 0) {
                    console.log(chalk.blueBright("You have lost the game"));
                    process.exit();
                }
            }
            if (num <= 0) {
                op2.fuleDecrease();
                console.log(`${p1.name} fule is ; ${p1.fuel}`);
                console.log(`${op2.name} fule is ; ${op2.fuel}`);
                if (op2.fuel <= 0) {
                    console.log(chalk.bgCyanBright("&&& ***You have win the game*** &&&"));
                    process.exit();
                }
            }
        }
        if (ask.select1 == "drank portion") {
            p1.fuleIncrease();
            console.log(chalk.greenBright(`congratulation your fule is : ${p1.fuel}`));
        }
        if (ask.select1 == "run for your life") {
            console.log(chalk.bgRedBright("you lose your life and you will lose your energy try again"));
            process.exit();
        }
    }
} while (true);
