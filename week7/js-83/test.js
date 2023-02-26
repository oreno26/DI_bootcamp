const {greeting} = require(`./mudules/app`)
const {hello} = require(`./mudules/app`)
greeting("bob");
hello(`sasha`)
console.log(greeting("bob") + " " + hello(`darek`));