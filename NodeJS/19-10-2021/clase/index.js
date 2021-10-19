const faker = require('faker');
const chalk = require('chalk');


const randomName = faker.name.findName();
const randomColor = faker.commerce.color();


console.log(randomColor);
if (randomColor === "mint green") {
    randomColor2 = faker.commerce.color();
    const color = chalk.keyword(randomColor2);
    console.log(`Color:${color(randomColor2)}`);
    console.log(`Nombre:${color(randomName)}`);
}else{
    const color = chalk.keyword(randomColor);
    console.log(`Color:${color(randomColor)}`);
    console.log(`Nombre:${color(randomName)}`);
}


