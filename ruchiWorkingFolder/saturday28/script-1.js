const salesData = [
  { id: 1, name: "Alice Johnson", department: "Electronics", sales: 85000, commission: 0.05, yearsExperience: 3, region: "North" },
  { id: 2, name: "Bob Smith", department: "Clothing", sales: 62000, commission: 0.04, yearsExperience: 2, region: "South" },
  { id: 3, name: "Carol Davis", department: "Electronics", sales: 94000, commission: 0.06, yearsExperience: 5, region: "East" },
  { id: 4, name: "David Wilson", department: "Home & Garden", sales: 78000, commission: 0.045, yearsExperience: 4, region: "West" },
  { id: 5, name: "Emma Brown", department: "Electronics", sales: 102000, commission: 0.055, yearsExperience: 6, region: "North" },
  { id: 6, name: "Frank Miller", department: "Clothing", sales: 56000, commission: 0.035, yearsExperience: 1, region: "South" },
  { id: 7, name: "Grace Lee", department: "Sports", sales: 89000, commission: 0.05, yearsExperience: 4, region: "East" },
  { id: 8, name: "Henry Taylor", department: "Home & Garden", sales: 71000, commission: 0.04, yearsExperience: 3, region: "West" },
  { id: 9, name: "Iris Chen", department: "Sports", sales: 96000, commission: 0.055, yearsExperience: 5, region: "North" },
  { id: 10, name: "John Anderson", department: "Electronics", sales: 88000, commission: 0.05, yearsExperience: 3, region: "South" }
];

console.log("Sales Data:", salesData);
console.log("\n=== 10 CALCULATION QUESTIONS ===\n");

// Question 1: Calculate total sales across all employees
const totalSales = salesData.reduce((sum, user) => sum + user.sales, 0);
console.log("1. What is the total sales amount across all employees? :", totalSales);

// Question 2: Find average sales per employee
const avgSales = totalSales / salesData.length;
console.log("2. What is the average sales amount per employee? :", avgSales);

// Question 3: Calculate total commission earned by all employees
const totalcomm = salesData.reduce((sum, user) => sum + user.commission, 0);
console.log("3. What is the total commission earned by all employees? :", totalcomm);

// Question 4: Find employees with sales above average
const aboveAvg = salesData.filter(user => user.sales > avgSales);
console.log("4. How many employees have sales above the average?");
aboveAvg.forEach(user => {
  console.log(`Employee: ${user.name}, Sales: ${user.sales}`);
}
);


// Question 5: Calculate total sales by department
const salesByDept = {};
salesData.forEach(user => {
  salesByDept[user.department] = (salesByDept[user.department] || 0) + user.sales;
});
console.log("5. What are the total sales by department?");
for (let key in salesByDept) {
  console.log(`${key}: ${salesByDept[key]}`);
}


// Question 6: Find the top 3 performers by sales
const topPerformers = salesData
  .sort((a, b) => b.sales - a.sales)
  .slice(0, 3)
  .map(user => ({ name: user.name, sales: user.sales }));
console.log("6. Who are the top 3 performers by sales amount? :");
topPerformers.forEach(user => {
    console.log(`Employee: ${user.name}, Sales: ${user.sales}`);
})


// Question 7: Calculate average years of experience by region
const avgExperienceByRegion = salesData.reduce((acc, user) => {
  if (!acc[user.region]) {
    acc[user.region] = { totalExperience: 0, count: 0 };
  }
  acc[user.region].totalExperience += user.yearsExperience;
  acc[user.region].count += 1;
  return acc;
}, {});
console.log("7. What is the average years of experience by region? :");
for (let region in avgExperienceByRegion) {
  const avgExperience = (avgExperienceByRegion[region].totalExperience / avgExperienceByRegion[region].count).toFixed(2);
  console.log(`${region}: ${avgExperience} years`);
}


// Question 8: Find employees with commission rate above 5%
const highCommissionEmployees = salesData.filter(user => user.commission > 0.05);
console.log("8. Which employees have a commission rate above 5%?", highCommissionEmployees.map(user => user.name).join(", "));
// Question 9: Calculate the performance ratio (sales per year of experience)
console.log("9. What is each employee's performance ratio (sales per year of experience)?");
const performanceRatios = salesData.map(user => ({
  name: user.name,
  performanceRatio: (user.sales / user.yearsExperience).toFixed(2)
}));
performanceRatios.forEach(user => {
  console.log(`Employee: ${user.name}, Performance Ratio: ${user.performanceRatio}`);
});


// Question 10: Find the department with highest average commission rate
const commissionByDept = {};
const countDept = {};
salesData.forEach(emp => {
  commissionByDept[emp.department] = (commissionByDept[emp.department] || 0) + emp.commission;
  countDept[emp.department] = (countDept[emp.department] || 0) + 1;
});
const avgCommByDept = {};
for (const dept in commissionByDept) {
  avgCommByDept[dept] = commissionByDept[dept] / countDept[dept];
}
const topDept = Object.entries(avgCommByDept).sort((a, b) => b[1] - a[1])[0];
console.log("10. Which department has the highest average commission rate? :", topDept[0], "-", topDept[1].toFixed(3));



// Mock JSON Array - Employee Sales Data Question 2
// const salesData1 = [
//   { id: 1, name: "Alice Johnson", department: "Electronics", sales: 85000, commission: 0.05, yearsExperience: 3, region: "North" },
//   { id: 2, name: "Bob Smith", department: "Clothing", sales: 62000, commission: 0.04, yearsExperience: 2, region: "South" },
//   { id: 3, name: "Carol Davis", department: "Electronics", sales: 94000, commission: 0.06, yearsExperience: 5, region: "East" },
//   { id: 4, name: "David Wilson", department: "Home & Garden", sales: 78000, commission: 0.045, yearsExperience: 4, region: "West" },
//   { id: 5, name: "Emma Brown", department: "Electronics", sales: 102000, commission: 0.055, yearsExperience: 6, region: "North" },
//   { id: 6, name: "Frank Miller", department: "Clothing", sales: 56000, commission: 0.035, yearsExperience: 1, region: "South" },
//   { id: 7, name: "Grace Lee", department: "Sports", sales: 89000, commission: 0.05, yearsExperience: 4, region: "East" },
//   { id: 8, name: "Henry Taylor", department: "Home & Garden", sales: 71000, commission: 0.04, yearsExperience: 3, region: "West" },
//   { id: 9, name: "Iris Chen", department: "Sports", sales: 96000, commission: 0.055, yearsExperience: 5, region: "North" },
//   { id: 10, name: "John Anderson", department: "Electronics", sales: 88000, commission: 0.05, yearsExperience: 3, region: "South" }
// ];

// console.log("Sales Data:", salesData);
// console.log("\n=== 10 FOR LOOP QUESTIONS ===\n");

// Question 1: Use a for loop to calculate the total sales amount
console.log("1. Use a for loop to calculate the total sales amount across all employees");
var totalSale  = 0;
salesData.forEach(user => {
    totalSale = totalSale + user.sales;
});
console.log(totalSale);


// Question 2: Use a for loop to find the employee with the highest sales
console.log("2. Use a for loop to find the employee with the highest sales amount");
for (let index = 0; index < salesData.length; index++) {
    var salesHigh = salesData.sort((a,b)=>b.sales - a.sales);
}
console.log("Name:", salesHigh[0].name,", sales:", salesHigh[0].sales);


// Question 3: Use a for loop to count employees in each department
console.log("3. Use a for loop to count how many employees are in each department");
var countEmp = {}
salesData.forEach(emp =>{
    countEmp[emp.department] = (countEmp[emp.department] || 0) + 1
})
for (const key in countEmp) {
   console.log(`${key} : ${countEmp[key]}`);
}


// Question 4: Use a for loop to calculate average commission rate
console.log("4. Use a for loop to calculate the average commission rate of all employees");
var totalcom = 0;
var empCount = 0;
salesData.forEach(emp => {
    totalcom = totalcom + emp.commission;
    empCount = empCount + 1;
});
var avgcom = totalcom / empCount;
console.log(avgcom.toFixed(4));


// Question 5: Use a for loop to find all employees with more than 4 years experience
console.log("5. Use a for loop to find all employees with more than 4 years of experience");
for (let index = 0; index < salesData.length; index++) {
    if(salesData[index].yearsExperience > 4){
        console.log(`${salesData[index].name}, ${salesData[index].yearsExperience} `);
    }
}

// Question 6: Use a for loop to calculate total commission earned by region
console.log("6. Use a for loop to calculate the total commission earned by each region");
var countcom = {}
salesData.forEach(emp =>{
    countcom[emp.region] = (countcom[emp.region] || 0) + emp.commission
})
for (const key in countcom) {
   console.log(`${key} : ${countcom[key].toFixed(3)}`);
}

// Question 7: Use a for loop to find the youngest and oldest employees (by experience)
console.log("7. Use a for loop to find the employee with the least and most years of experience");
var obj = {}
for (let i = 0; i < salesData.length-1; i++) {
   for (let j = 0; j < salesData.length-1-i; j++) {
     if(salesData[j].yearsExperience > salesData[j+1].yearsExperience){
        let temp = salesData[j]
        salesData[j] = salesData[j+1]
        salesData[j+1]= temp
    }  
   }
}
console.log(`Least : ${salesData[0].name} with ${salesData[0].yearsExperience} years, Most : ${salesData[salesData.length-1].name} with ${salesData[salesData.length-1].yearsExperience} years`);


// Question 8: Use a for loop to create a new array with employee names and their net earnings
console.log("8. Use a for loop to create a new array containing each employee's name and their net earnings (sales + commission)");
function earnings(sales, comm){
    var earn = sales+(sales*comm);
    return earn;
}
var array = []
for (let i = 0; i < 2; i++) {
    for (let j = 0; j < salesData.length; j++) {
    array[j] = {Name :salesData[j].name,Earnings : earnings(salesData[j].sales,salesData[j].commission)}
}
}
array.forEach(user => {
console.log(`Name :${user.Name}, Earnings :${user.Earnings}`);
});


// Question 9: Use a for loop to find employees whose sales are within 10% of the average
console.log("9. Use a for loop to find employees whose sales are within 10% of the average sales amount");
let avg = totalSales / salesData.length;
let range = avg * 0.10;
console.log("range :",range);

for (let index = 0; index < salesData.length; index++) {
     if (salesData[index].sales >= avg - range && salesData[index].sales <= avg + range) {
    console.log(`Name : ${salesData[index].name}, Sales : ${salesData[index].sales}`);
  }
}


// Question 10: Use a for loop to rank employees by performance (sales per year of experience)
console.log("10. Use a for loop to create a ranking of employees based on their performance ratio (sales divided by years of experience)");
function perform(sales, years) {
    let res = sales/years;
    return res.toFixed(3);
}
for (let i = 0; i < salesData.length-1; i++) {
   for (let j = 0; j < salesData.length-1-i; j++) {
     if(perform(salesData[j].sales,salesData[j].yearsExperience) > perform(salesData[j].sales,salesData[j].yearsExperience)){
        let temp = salesData[j]
        salesData[j] = salesData[j+1]
        salesData[j+1]= temp
    }  
   }
   console.log(`${i + 1} : ${salesData[i].name} ${perform(salesData[i].sales,salesData[i].yearsExperience)} performance`);
}