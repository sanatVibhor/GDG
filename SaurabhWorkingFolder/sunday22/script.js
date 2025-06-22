const users = [
  { id: 1, name: "Alice", age: 25, isActive: true, hobbies: ["reading", "hiking"] },
  { id: 2, name: "Bob", age: 30, isActive: false, hobbies: ["gaming", "cooking"] },
  { id: 3, name: "Charlie", age: 28, isActive: true, hobbies: ["cycling", "music"] },
  { id: 4, name: "David", age: 22, isActive: false, hobbies: ["travel", "reading"] },
  { id: 5, name: "Eva", age: 35, isActive: true, hobbies: ["yoga", "cooking"] }
];
// 1. map() → Return names of all users
const userNames = users.map(user => user.name);
console.log("User Names:", userNames);

// 2. filter() → Get only active users
const activeUsers = users.filter(user => user.isActive);
console.log("Active Users:", activeUsers);

// 3. find() → Find the user named "Charlie"
const charlie = users.find(user => user.name === "Charlie");
console.log("Found User:", charlie);
// 4. reduce() → Calculate the total age of all users
const totalAge = users.reduce((sum, user) => sum + user.age, 0);
console.log("Total Age of Users:", totalAge);

// 5. some() → Check if there is any user below age 24
const hasUserBelow24 = users.some(user => user.age < 24);
console.log("Has User Below 24:", hasUserBelow24);

// 6. every() → Check if all users have the 'cooking' hobby
const allUsersLikeCooking = users.every(user => user.hobbies.includes("cooking"));
console.log("All Users Like Cooking:", allUsersLikeCooking);

// 7. forEach() → Print each user's name and age
users.forEach(user => {
  console.log(`Name: ${user.name}, Age: ${user.age}`);
});

// 8. includes() → Check if "Eva" has "yoga" as a hobby
const hasYogaHobby = users.some(user => user.name === "Eva" && user.hobbies.includes("yoga"));
console.log("Eva has Yoga Hobby:", hasYogaHobby);

// 9. sort() → Sort users by age in descending order
const sortedUsers = [...users].sort((a, b) => b.age - a.age);
console.log("Sorted Users by Age:", sortedUsers);

// 10. flatMap() or map + flat() → Create one array of all hobbies
// Using a for loop, count how many users have more than 1 hobby.
const allHobbies = users.flatMap(user => user.hobbies);
const usersWithMultipleHobbies = allHobbies.filter((hobby, index) => allHobbies.indexOf(hobby) !== index);
console.log("Users with Multiple Hobbies:", usersWithMultipleHobbies);