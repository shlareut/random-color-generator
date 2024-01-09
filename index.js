// Step 1: Import library to generate random HEX code
// Step 2: Figure out how to dye console message
// Step 3: Import package to process command line arguments
// Step 4: Allow user to enter hue and luminosity
// Step 5: Incorporate hue and luminosity in randomColor
// Step 6: Generate boxes in console

// Step 2: Allow user to input hue
// Step 3: Allow user to input luminosity
// Step 4: Incorporate user input in color generation
// Step 5: Prompt user when user enters ask keyword
// Step 6: Modify printed box based on user size input
// Step 7: Console log result

import { argv } from 'node:process'; // import process argv
import boxen from 'boxen'; // import box generator library for console
import chalk from 'chalk'; // import chalk package to dye console messages
import randomColor from 'randomcolor'; // import HEX randomizer package

const hue = argv[2];
const luminosity = argv[3];
const randomHex = randomColor({
  hue: `${hue}`,
  luminosity: `${luminosity}`,
});
const chalkRandomHex = chalk.hex(`${randomHex}`).visible(randomHex);

console.log(chalkRandomHex);
console.log(hue);
console.log(luminosity);
console.log(
  boxen('foo bar', {
    borderStyle: {
      topLeft: '#',
      topRight: '#',
      bottomLeft: '#',
      bottomRight: '#',
      top: '#',
      bottom: '#',
      left: '#',
      right: '#',
    },
  }),
);
