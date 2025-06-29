const users = [
  { id: 1, name: "Alice", age: 25, isActive: true, hobbies: ["reading", "hiking"] },
  { id: 2, name: "Bob", age: 30, isActive: false, hobbies: ["gaming", "cooking"] },
  { id: 3, name: "Charlie", age: 28, isActive: true, hobbies: ["cycling", "music"] },
  { id: 4, name: "David", age: 22, isActive: false, hobbies: ["travel", "reading"] },
  { id: 5, name: "Eva", age: 35, isActive: true, hobbies: ["yoga", "cooking"] }
]; 

//1. map() → Return names of all users
const names = users.map(user => user.name);
console.log("names of all the students:", names);

//2. filter() → Get only active users
const activeUsers = users.filter((user) => user.isActive);
console.log("active users:", activeUsers);

//3. find() → Find the user named "Charlie"
const chalieFind = users.find(user => user.name === "Charlie");
console.log("Charlie user;", chalieFind);

//4.reduce() → Calculate the total age of all users
const totalAge = users.reduce((accumulator, user) => accumulator + user.age, 0);
console.log("total age of all users:", totalAge);

//5. some() → Check if there is any user older than 30
const isAnyUserOlderThan30 = users.some(user => user.age > 30);
console.log("Is there any user older than 30?", isAnyUserOlderThan30);

//6. every() → Check if all users are active
const areAllUsersActive = users.every(user => user.isActive);
console.log("Are all users active?", areAllUsersActive);

//7. forEach() → Print each user's name and age
users.forEach(user => {
  console.log(`User: ${user.name}, Age: ${user.age}`);
});

//8. includes() → Check if "Eva" has "yoga" as a hobby
const eva = users.find(user => user.name === "Eva");
const hasYogaHobby = eva && eva.hobbies.includes("yoga");
console.log("Does Eva have yoga as a hobby?", hasYogaHobby);

//9. sort() → Sort users by age in ascending order
const sortedByAge = [...users].sort((a, b) => a.age - b.age);
console.log("Users sorted by age:", sortedByAge);


//10. flatMap() or map + flat() → Create one array of all hobbies
const allHobbies = users.flatMap(user => user.hobbies);
console.log("All hobbies:", allHobbies);


