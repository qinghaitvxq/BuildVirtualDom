const CREATE = "CREATE";
const REMOVE = "REMOVE";
const REPLACE = "REPLACE";
const UPDATE = "UPDATE";
const SET_PROP = "SET_PROP";
const REMOVE_PROP = "REMOVE_PROP";

function flatten(arr) {
  return [].concat.apply([], arr);
}

function h(type, props, ...children) {
  props = props || {};
  return { type, props, children: flatten(children) };
}
function view(count) {
  return (
    <ul id="cool" className="foo">
      <li className="test">test1</li>
      <li>test2</li>
    </ul>
  );
}
function createElement(node) {
  if (typeof node === "string") {
    return document.createTextNode(node);
  }
  const el = document.createElement(node.type);
  node.children.map(createElement).forEach(el.appendChild.bind(el));
  return el;
}
function render(el) {
  el.appendChild(createElement(view(0)));
}
