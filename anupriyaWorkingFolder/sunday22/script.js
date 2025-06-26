const users = [
  { id: 1, name: "Alice", age: 25, isActive: true, hobbies: ["reading", "hiking"] },
  { id: 2, name: "Bob", age: 30, isActive: false, hobbies: ["gaming", "cooking"] },
  { id: 3, name: "Charlie", age: 28, isActive: true, hobbies: ["cycling", "music"] },
  { id: 4, name: "David", age: 22, isActive: false, hobbies: ["travel", "reading"] },
  { id: 5, name: "Eva", age: 35, isActive: true, hobbies: ["yoga", "cooking"] }
];

// 1. map() → Return names of all users
const names = users.map(user => user.name);
console.log("Names of all users:", names);

// 2. filter() → Get only active users
const activeUsers = users.filter(user => user.isActive);
console.log("Active users:", activeUsers);

// 3. find() → Find the user named "Charlie"
const charlie = users.find(user => user.name === "Charlie");
console.log("User named Charlie:", charlie);


// 4. reduce() → Calculate the total age of all users
const totalAge = users.reduce((sum, user) => sum + user.age, 0);
console.log("Total age of all users:", totalAge);

// 5. some() → Check if there is any user below age 24
const hasYoungUser = users.some(user => user.age < 24);
console.log("Any user below age 24:", hasYoungUser);

// 6. every() → Check if all users have the 'cooking' hobby
const allHaveCooking = users.every(user => user.hobbies.includes("cooking"));
console.log("All users have 'cooking' hobby:", allHaveCooking);

// 7. forEach() → Print each user's name and age
console.log("Each user's name and age:");
users.forEach(user => {
  console.log(`${user.name}, Age: ${user.age}`);
});

// 8. includes() → Check if "Eva" has "yoga" as a hobby
const eva = users.find(user => user.name === "Eva");
const evaHasYoga = eva ? eva.hobbies.includes("yoga") : false;
console.log("Does Eva have 'yoga' as a hobby?", evaHasYoga);

// 9. sort() → Sort users by age in descending order
const sortedByAgeDesc = [...users].sort((a, b) => b.age - a.age);
console.log("Users sorted by age (desc):", sortedByAgeDesc);

// 10. flatMap() → Create one array of all hobbies
const allHobbies = users.flatMap(user => user.hobbies);
console.log("All hobbies:", allHobbies);

// for loop → Count how many users have more than 1 hobby
let count = 0;
for (let i = 0; i < users.length; i++) {
  if (users[i].hobbies.length > 1) {
    count++;
  }
}
console.log("Users with more than 1 hobby:", count);

