const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push(name);
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

function nondestructivelyGetCats() {
  return cats.slice();
}

function nondestructivelyGetFirstCat() {
  return cats.slice(0, 1);
}

function nondestructivelyGetLastCat() {
  return cats.slice(-1);
}

function nondestructivelyAppendCat(name) {
  return [...cats, name];
}

function nondestructivelyPrependCat(name) {
  return [name, ...cats];
}

