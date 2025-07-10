import User, { validateEmail } from './user.js';


const u = new User("Shraddha");
console.log(u.getInfo());

const email = "shraddha@example.com";
console.log("Is email valid?", validateEmail(email));
