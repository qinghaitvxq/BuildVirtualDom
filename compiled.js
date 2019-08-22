const CREATE = "CREATE";
const REMOVE = "REMOVE";
const REPLACE = "REPLACE";
const UPDATE = "UPDATE";
const SET_PROP = "SET_PROP";
const REMOVE_PROP = "REMOVE_PROP";

function view(count) {
  return h(
    "ul",
    { id: "cool", className: "foo" },
    h(
      "li",
      { className: "test" },
      "test1"
    ),
    h(
      "li",
      null,
      "test2"
    )
  );
}
view(1);
