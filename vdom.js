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

function updateDOM() {
  vDom = createVDOM();
  jsInput = convert(vDom[0]);
  jsDiv = convert(vDom[1]);
  document.body.replaceChildren(jsInput, jsDiv);
}

function convert(node) {
  const elem = document.createElement(node[0]);
  elem.textContent = node[1];
  elem.value = node[1];
  elem.oninput = node[2];
  return elem;
}

setInterval(updateDOM, 15);
