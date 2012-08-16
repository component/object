
/**
 * Module dependencies.
 */

var object = require('..');

describe('.keys(obj)', function(){
  it('should return the keys of an object', function(){
    var obj = { name: 'tobi', age: 1 };
    object.keys(obj).should.eql(['name', 'age']);
  })
})

describe('.values(obj)', function(){
  it('should return the values of an object', function(){
    var obj = { name: 'tobi', age: 1 };
    object.values(obj).should.eql(['tobi', 1]);
  })
})

describe('.length(obj)', function(){
  it('should return key count', function(){
    var obj = { name: 'tobi', age: 1 };
    object.length(obj).should.equal(2);
  })
})