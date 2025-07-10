export default class User {
  constructor(name) {
    this.name = name;
  }

  getInfo() {
    return `User: ${this.name}`;
  }
}

export function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
