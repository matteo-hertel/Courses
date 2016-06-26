/**
 * If arguments are passed through the command line we can use process.argv
 * 0 is the interpreter and 1 is for the script path, everything else is what has been passed through the command line
 *
 */
const a = parseInt(process.argv[2]) || 0 // first argument or 0
const b = parseInt(process.argv[3]) || 0 // second argument or 0

console.log(a + b);
