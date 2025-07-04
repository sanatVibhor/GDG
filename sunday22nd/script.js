const users = [
  { id: 1, name: "Alice", age: 25, isActive: true, hobbies: ["reading", "hiking"] },
  { id: 2, name: "Bob", age: 30, isActive: false, hobbies: ["gaming", "cooking"] },
  { id: 3, name: "Charlie", age: 28, isActive: true, hobbies: ["cycling", "music"] },
  { id: 4, name: "David", age: 22, isActive: false, hobbies: ["travel", "reading"] },
  { id: 5, name: "Eva", age: 35, isActive: true, hobbies: ["yoga", "cooking"] }
];

//map()
const names = users.map(user => user.name);
console.log(names); 

//filter()
const activeUsers = users.filter(user => user.isActive);
console.log(activeUsers);

//find()
const charlie = users.find(user => user.name === "Charlie");
console.log(charlie);

//reduce()
const totalAge = users.reduce((sum, user) => sum + user.age, 0);
console.log(totalAge); 

//some()
const hasUserBelow24 = users.some(user => user.age < 24);
console.log(hasUserBelow24); 

//every()
const allHaveCooking = users.every(user => user.hobbies.includes("cooking"));
console.log(allHaveCooking); 

//foreach()
users.forEach(user => {
  console.log(`${user.name} is ${user.age} years old`);
});


//includes()
const eva = users.find(user => user.name === "Eva");
const hasYoga = eva?.hobbies.includes("yoga");
console.log(hasYoga); 

//sort()
const sortedByAgeDesc = [...users].sort((a, b) => b.age - a.age);
console.log(sortedByAgeDesc);


//flatmap()
const allHobbies = users.flatMap(user => user.hobbies);
console.log(allHobbies);

