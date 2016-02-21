'use strict';

/** Foo class */
class Foo {
   /**
    * the foo.bar
    * @type number
    */
   get bar() {
      return 2;
   }

   /**
    * Lorem ipsum
    * @param {number} a First argument
    * @param {number} b Second argument
    * @returns Bazified arguments
    */
   baz(a, b) {
      return a + b;
   }
}

module.exports = Foo;
