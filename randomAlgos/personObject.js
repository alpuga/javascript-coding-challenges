/*jshint esversion: 6 */

/* Fill in object constructor with methods.
The methods that take an argument must only accept
one string argument. These methods must be the only
available means of interacting with the object */

var Person = function(firstAndLast) {
  let fullName = firstAndLast;

  this.getFullName = function() {
    return fullName;
  };

  this.getFirstName = function() {
    return fullName.split(" ")[0];
  };

  this.getLastName = function() {
    return fullName.split(" ")[1];
  };

  this.setFirstName = function(first) {
    fullName = first + " " + fullName.split(" ")[1];
  };

  this.setLastName = function(last) {
    fullName = fullName.split(" ")[0] + " " + last;
  };

  this.setFullName = function(firstAndLast) {
    fullName = firstAndLast;
  };
};

var bob = new Person("Bob Ross");
bob.setFirstName("Steve");
bob.getFullName(); // 'Steve Ross'
