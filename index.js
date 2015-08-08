module.exports = { tuple, fst, snd, swap }

// -- Construct a new tuple.
// tuple :: ...Any -> Array
function tuple(...any) {
  return any
}

// -- Extract the first component of a pair.
// fst :: Array -> Any
function fst(pair) {
  return pair[0]
}

// -- Extract the second component of a pair.
// snd :: Array -> Any
function snd(pair) {
  return pair[1]
}

// -- Swap the components of a pair.
// swap :: Array -> Array
function swap(pair) {
  return [pair[1], pair[0]]
}
