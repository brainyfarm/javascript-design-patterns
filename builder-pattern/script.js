/**
 * Allows for creation of Objects using a build method
 * Such that we can create optional properties and 
 * Avoid the need to set those properties to undefined.
 * 
 * For instance, our user class can contain a user without a phone or address
 * And not set those values to undefined, if we want.
 * Gives a nice and easy interface to creating a new instance of the object
 * 
 * Good for use when you have an object with a lot of moving parts
 */
const { log } = require('console');

class Address {
  constructor(zip, street) {
    Object.assign(this, { zip, street });
  }
}

/**
 * Buider pattern in js
 * allow creation of object without the need to set all properties
 * Can also default some properties to a certain value if not set
 */
class User {
  constructor(name, { age, phone, address, subscribed = true } = {}) {
    Object.assign(this, { 
      name, 
      age, 
      phone, 
      address, 
      subscribed 
    });
  }
}

const user = new User('Bob', { 
  age: 10, 
  phone: '12345678',
  address: new Address('10111', '12 John Street'),
});

log(user);
