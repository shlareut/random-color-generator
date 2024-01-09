// Step 1: Import library to generate random HEX code
// Step 2: Figure out how to dye console message
// Step 3: Import package to process command line arguments
// Step 4: Allow user to enter hue and luminosity
// Step 5: Incorporate hue and luminosity in randomColor
// Step 6: Generate boxes in console

import { argv } from 'node:process'; // import process argv
import chalk from 'chalk'; // import chalk package to dye console messages
import randomColor from 'randomcolor'; // import HEX randomizer package

const hue = argv[2];
const luminosity = argv[3];
const randomHex = randomColor({
  hue: `${hue}`,
  luminosity: `${luminosity}`,
});
const chalkRandomHex = chalk.hex(`${randomHex}`).visible(randomHex);

let sideChar = chalk.hex(`${randomHex}`).visible('#');
let topChar = chalk.hex(`${randomHex}`).visible('###########');

console.log(topChar);
console.log(`${sideChar}         ${sideChar}`);
console.log(`${sideChar} ${chalkRandomHex} ${sideChar}`);
console.log(`${sideChar}         ${sideChar}`);
console.log(topChar);

// Below attempts of stretch goal to make the box dynamic

// const char = '#';
// const row = 14;
// const col = 11;

// const numRow = Math.ceil((row - 3) / 2) / 2;
// const numCol = Math.ceil((col - 9) / 2) / 2;
