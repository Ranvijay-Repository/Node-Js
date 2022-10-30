//  Modules ---> is the Encapsulated Code ( Show Only how much is required )

const { name1, name2 } = require("./names");
const sayHi = require("./utils");
const diffImports = require("./Alternative_Exports");

console.log("diffImports===>", diffImports);

sayHi("Ranvijay");
sayHi(name1);
sayHi(name2);
