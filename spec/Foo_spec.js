'use strict';

describe('foo', () => {
   var Foo = require('../index.js').Foo;

   var foo;

   beforeEach(() => {
      foo = new Foo();
   });

   it('bar should return 2', () => {
      expect(foo.bar).toEqual(2);
   });
});
