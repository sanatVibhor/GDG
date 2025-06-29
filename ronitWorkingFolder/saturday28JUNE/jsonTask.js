// Mock JSON Array - Employee Sales Data
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

// Question1 Calculate total sales across all employees
console.log("1. What is the total sales amount across all employees?");
const totalsales=salesData.reduce((sum, user) => sum + user.sales, 0);
console.log(totalsales);
// Question2 Find average sales per employee
console.log("2. What is the average sales amount per employee?");
const avg=totalsales/salesData.length;
console.log(avg);

// Question3 Calculate total commission earned by all employees
console.log("3. What is the total commission earned by all employees?");
var tcommission=0,i;
for(let i=0;i<salesData.length;i++){
    tcommission+=(salesData[i].sales*salesData[i].commission)/100;
    // tcommission+=x;
}
console.log(tcommission);

// Question4 Find employees with sales above average
console.log("4. How many employees have sales above the average?");
var count=0;
for(let i=0;i<salesData.length;i++){
    if (salesData[i].sales>avg){
        count++;
    }
}
console.log("The number of employee having sales above avg:",count);

// Question5 Calculate total sales by department
console.log("5. What are the total sales by department?");
const totalSalesByDepartment = salesData.reduce((acc, emp) => {
    acc[emp.department] = (acc[emp.department] || 0) + emp.sales;
    return acc;
}, {});
console.log(totalSalesByDepartment);

// Question6 Find the top 3 performers by sales
console.log("6. Who are the top 3 performers by sales amount?");
const top3Performers = [...salesData].sort((a, b) => b.sales - a.sales).slice(0, 3);
console.log(top3Performers);

// Question7 Calculate average years of experience by region
console.log("7. What is the average years of experience by region?");
const experienceByRegion = {};
salesData.forEach(emp => {
    if (!experienceByRegion[emp.region]) {
        experienceByRegion[emp.region] = { total: 0, count: 0 };
    }
    experienceByRegion[emp.region].total += emp.yearsExperience;
    experienceByRegion[emp.region].count++;
});

const avgExperienceByRegion = {};
for (let region in experienceByRegion) {
    const { total, count } = experienceByRegion[region];
    avgExperienceByRegion[region] = total / count;
}
console.log(avgExperienceByRegion);

// Question8 Find employees with commission rate above 5%
console.log("8. Which employees have a commission rate above 5%?");
const highCommissionEmployees = salesData.filter(emp => emp.commission > 0.05);
console.log(highCommissionEmployees);

// Question9 Calculate the performance ratio (sales per year of experience)
console.log("9. What is each employee's performance ratio (sales per year of experience)?");
const performanceRatios = salesData.map(emp => ({
    name: emp.name,
    ratio: (emp.sales / emp.yearsExperience).toFixed(2)
}));
console.log(performanceRatios);

// Questio10 Find the department with highest average commission rate
console.log("10. Which department has the highest average commission rate?");
const commissionByDept = {};
salesData.forEach(emp => {
    if (!commissionByDept[emp.department]) {
        commissionByDept[emp.department] = { total: 0, count: 0 };
    }
    commissionByDept[emp.department].total += emp.commission;
    commissionByDept[emp.department].count++;
});

let highestAvgDept = "";
let highestAvgRate = 0;

for (let dept in commissionByDept) {
    const { total, count } = commissionByDept[dept];
    const avgRate = total / count;
    if (avgRate > highestAvgRate) {
        highestAvgRate = avgRate;
        highestAvgDept = dept;
    }
}
console.log(`Highest avg commission: ${highestAvgDept} (${(highestAvgRate * 100).toFixed(2)}%)`);
