var assert = require('assert')

function test() {
  assert.equal(2 + 2, 4);
}

test()
//if (module == require.main) require('test').run(test);