// bad pattern
// function terminates at return
function func() {
  return;
  {
    name: "Batman";
  }
}

//return undefined
// preceding is equal to this one

function func() {
  return undefined;
  {
    name: "Batman";
  }
}

// so always put the curly brace in the same line