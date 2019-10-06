/**
 * Remove unnecessary null check by creating a NullObject class that
 * returns default values for a null instance
 */
const { log } = require('console');

class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
  hasAccess() {
    return this.name === 'Bob';
  }
}

class NullUser {
  constructor() {
    this.id = -1;
    this.name = 'Guest';
  }

  hasAccess() {
    return false;
  }
}

const users = [
  new User(1, 'Bob'),
  new User(2, 'John')
];

// Get user would have returned Null when user isn't found
// Instead, we return the Null object so no extra checks needed for null after here.
const getUser = id =>
  users.find(user => user.id === id) || new NullUser();

const printUser = id => {
  const user = getUser(id);
  const userStatus = `
    Name: ${user.name}
    User is admin: ${user.hasAccess()}`;
  return log(userStatus);
}

printUser(1)
printUser(5);
