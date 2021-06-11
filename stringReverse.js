const string = "!таниР ,тевирП";

// ========== 1 solution ==========

let reversedString = "";
for (let i = string.length-1; i >= 0; i--) {
    reversedString += string[i];
}

console.log(reversedString)

// ========== 2 solution ==========

console.log(Array.from(string).reverse().join(''));