
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', userHandleInput);
  return stdin;
}

function userHandleInput(key){

  if (key === '\u0003') {
    process.exit();
  }
  
  
}






module.exports = setupInput;