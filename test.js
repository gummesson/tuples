const test = require('tape')
const { tuple, fst, snd, swap } = require('./')

test('tuples', (t) => {
  t.test('tuple(...any)', (assert) => {
    const results = tuple(1, 2)
    assert.deepEqual(results, [1, 2])
    assert.end()
  })

  t.test('fst(pair)', (assert) => {
    const pair = tuple(1, 2)
    const results = fst(pair)
    assert.equal(results, 1)
    assert.end()
  })

  t.test('snd(pair)', (assert) => {
    const pair = tuple(1, 2)
    const results = snd(pair)
    assert.equal(results, 2)
    assert.end()
  })

  t.test('swap(pair)', (assert) => {
    const pair = tuple(1, 2)
    const results = swap(pair)
    assert.deepEqual(results, [2, 1])
    assert.end()
  })
})
