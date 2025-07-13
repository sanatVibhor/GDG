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

// Question 1: Total sales
const totalSales = salesData.reduce((sum, emp) => sum + emp.sales, 0);
console.log("1. Total sales amount across all employees:", totalSales);

// Question 2: Average sales per employee
const averageSales = totalSales / salesData.length;
console.log("2. Average sales amount per employee:", averageSales);

// Question 3: Total commission earned
const totalCommission = salesData.reduce((sum, emp) => sum + emp.sales * emp.commission, 0);
console.log("3. Total commission earned by all employees:", totalCommission);

// Question 4: Employees with sales above average
const aboveAverageCount = salesData.filter(emp => emp.sales > averageSales).length;
console.log("4. Number of employees with sales above average:", aboveAverageCount);

// Question 5: Total sales by department
const salesByDept = salesData.reduce((acc, emp) => {
  acc[emp.department] = (acc[emp.department] || 0) + emp.sales;
  return acc;
}, {});
console.log("5. Total sales by department:", salesByDept);

// Question 6: Top 3 performers by sales
const topPerformers = [...salesData].sort((a, b) => b.sales - a.sales).slice(0, 3);
console.log("6. Top 3 performers by sales amount:", topPerformers.map(e => `${e.name} ($${e.sales})`));

// Question 7: Average commission rate
const avgCommissionRate = salesData.reduce((sum, emp) => sum + emp.commission, 0) / salesData.length;
console.log("7. Average commission rate:", avgCommissionRate);

// Question 8: Total sales by region
const salesByRegion = salesData.reduce((acc, emp) => {
  acc[emp.region] = (acc[emp.region] || 0) + emp.sales;
  return acc;
}, {});
console.log("8. Total sales by region:", salesByRegion);

// Question 9: Highest earning department (by total sales)
const topDept = Object.entries(salesByDept).sort((a, b) => b[1] - a[1])[0];
console.log("9. Highest earning department:", topDept[0], "with sales of", topDept[1]);

// Question 10: Average years of experience
const avgExperience = salesData.reduce((sum, emp) => sum + emp.yearsExperience, 0) / salesData.length;
console.log("10. Average years of experience among employees:", avgExperience);
