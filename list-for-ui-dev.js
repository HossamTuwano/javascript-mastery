let name = "hossam";
let vDOM;
let elems;

function createVDOM() {
  return [
    [
      "input",
      name,
      function handle(e) {
        name = e.target.value;
      },
    ],
    ["div", `Hello, ${name}!`],
    ["div", "Great job"],
  ];
}
function updateDOM() {
  vDOM = createVDOM();
  elems = vDOM.map(convert);
  document.body.replaceChildren(...elems);
}
function convert(node) {
  const element = document.createElement(node[0]);
  element.textContent = node[1];
  element.value = node[1];
  element.oninput = node[2];
  return element;
}
setInterval(updateDOM, 15);
