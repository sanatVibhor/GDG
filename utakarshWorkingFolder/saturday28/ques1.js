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
console.log("1. What is the total sales amount across all employees?");
let sales=0;
for(let i=0; i<salesData.length; i++){
    sales+=salesData[i].sales;
}
console.log(sales);

// Question 2: Find average sales per employee
console.log("2. What is the average sales amount per employee?");
let totalEmployee=salesData.length;
let avgsales=sales/totalEmployee;
console.log(avgsales);

// Question 3: Calculate total commission earned by all employees
console.log("3. What is the total commission earned by all employees?");
let totalcommission=0;
for(let i=0; i<salesData.length; i++){
    totalcommission+=(salesData[i].commission)*(salesData[i].sales);
}
console.log(totalcommission);

// Question 4: Find employees with sales above average
console.log("4. How many employees have sales above the average?");
let count=0;
for(let i=0; i<salesData.length; i++){
    if((salesData[i].sales)>avgsales){
        count++;
    }
}
console.log(count);

// Question 5: Calculate total sales by department
console.log("5. What are the total sales by department?");
const totalSalesByDept=salesData.reduce((sum, curr) =>{
    const dept =curr.department;
    if(!sum[dept]){
        sum[dept]=0;
    }
    sum[dept]+=curr.sales;
    return sum;
},{}
);
console.log(totalSalesByDept)

// Question 6: Find the top 3 performers by sales
console.log("6. Who are the top 3 performers by sales amount?");
const top3 = [...salesData].sort((a,b)=>b.sales-a.sales).slice(0,3).map(emp => emp.name);
console.log(top3);

// Question 7: Calculate average years of experience by region
console.log("7. What is the average years of experience by region?");
const exp = salesData.reduce((year,curr)=>{
    const reg=curr.region;
    if(!year[reg]){
        year[reg]=0;
    }
    year[reg]+=curr.yearsExperience;
    return year;
},{}
);
console.log(exp);

// Question 8: Find employees with commission rate above 5%
console.log("8. Which employees have a commission rate above 5%?");
const employee=salesData.filter(salesData => salesData.commission>0.05);
const empnames=employee.map(emp => emp.name)
console.log(empnames);

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
console.log("10. Which department has the highest average commission rate?");
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

