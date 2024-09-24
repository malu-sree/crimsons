// Regular Expression

let regExPatr = /^[a-zA-Z]{3,15}$/;
let name = 'aBC1'
console.log(regExPatr.test(name));

// ^ - Start of the string
// $ - End of the string

// + - one or more characters.
// * - zero or more characters.
// ? - zero or one characters.

// [] - Range
// {} - Length
// {min, max} - Length
// | - Or operator
// () - Grouping

// Escape characters
//  1. \ 
//  2. \d - to check the integer
//  3. \s or space - to give the space in string
//  4. \b \b - To search the same string
//  5. \w - to check the word like number or string


// Negative Scenario
// 1. \S - it need to check if it contains otherthen space. If it contains only space then it's false
// 2. \D - it need to check if it contains other then numbers . If it contains only num then it's false 
// 3. \W
// 4. [^]-Not Operator


