const users = [
  { id: 1, name: "Alice", age: 25, isActive: true, hobbies: ["reading", "hiking"] },
  { id: 2, name: "Bob", age: 30, isActive: false, hobbies: ["gaming", "cooking"] },
  { id: 3, name: "Charlie", age: 28, isActive: true, hobbies: ["cycling", "music"] },
  { id: 4, name: "David", age: 22, isActive: false, hobbies: ["travel", "reading"] },
  { id: 5, name: "Eva", age: 35, isActive: true, hobbies: ["yoga", "cooking"] }
];

const names=users.map(users=>users.name);
console.log(names);

const active_user=users.filter(users=>users.isActive);
console.log(active_user);

const charlie=users.find(users=>users.name=="Charlie");
console.log(charlie);

const totalAge = users.reduce((sum, user) => sum + user.age, 0);
console.log(totalAge);

const hasUser_24 = users.some(user => user.age < 24);
console.log(hasUser_24);

const allLoveCooking = users.every(user => user.hobbies.includes("cooking"));
console.log(allLoveCooking);

users.forEach(user => {
  console.log(`${user.name}, Age: ${user.age}`);
});

const eva = users.find(user => user.name === "Eva");
const evaHasYoga = eva.hobbies.includes("yoga");
console.log(evaHasYoga); 

const sortedByAgeDesc = [...users].reverse();
console.log(sortedByAgeDesc);

const allHobbies = users.flatMap(user => user.hobbies);
console.log(allHobbies);

let count = 0;
for (let i = 0; i < users.length; i++) {
  if (users[i].hobbies.length > 1) {
    count++;
  }
}
console.log(count);



