// creating virtual dom

let name = "";
let jsInput;
let jsDiv;
let vDom;

function createVDOM() {
  return [
    ["input", name, handle],
    ["div", `Hello, ${name}`],
  ];
}

function handle() {
  name = jsInput.value;
}
