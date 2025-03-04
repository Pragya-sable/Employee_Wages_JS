const WAGE_PER_HOUR = 20;
const FULL_TIME_HOURS = 8;
const PART_TIME_HOURS = 4;
const MAX_WORKING_DAYS = 20;
const MAX_WORKING_HOURS = 160;
const FULL_TIME_WAGE = FULL_TIME_HOURS * WAGE_PER_HOUR;

const getWorkHours = (empCheck) => {
  return empCheck === 1
    ? PART_TIME_HOURS
    : empCheck === 2
    ? FULL_TIME_HOURS
    : 0;
};

let empDailyWageArray = [];
let empDailyWageMap = new Map();
let empDailyHoursMap = new Map();

let totalEmpHours = 0;
let totalWorkingDays = 0;

while (totalEmpHours <= 160 && totalWorkingDays < MAX_WORKING_DAYS) {
  totalWorkingDays++;
  let empCheck = Math.floor(Math.random() * 3);
  let empHours = getWorkHours(empCheck);
  totalEmpHours += empHours;
  let dailyWage = empHours * WAGE_PER_HOUR;

  empDailyWageArray.push(dailyWage);
  empDailyWageMap.set(totalWorkingDays, dailyWage);
  empDailyHoursMap.set(totalWorkingDays, empHours);
}

const totalWage = empDailyWageArray.reduce((acc, wage) => acc + wage, 0);
console.log("Total Employee Wage:", totalWage);

const dailyWageWithDay = [...empDailyWageMap.entries()].map(
  ([day, wage]) => `Day ${day}: $${wage}`
);
console.log("Daily Wage with Days:", dailyWageWithDay);

const fullTimeDays = [...empDailyWageMap.entries()]
  .filter(([_, wage]) => wage === FULL_DAY_WAGE)
  .map(([day, _]) => `Day ${day}`);
console.log("Full Time Wage Days:", fullTimeDays);

const firstFullTimeDay = [...empDailyWageMap.entries()].find(
  ([_, wage]) => wage === FULL_DAY_WAGE
);
console.log(
  "First Full Time Wage Day:",
  firstFullTimeDay ? `Day ${firstFullTimeDay[0]}` : "None"
);

const isAllFullTimeWage = empDailyWageArray.every(
  (wage) => wage === FULL_DAY_WAGE
);
console.log("All Full Time Wages?:", isAllFullTimeWage);

const hasPartTimeWage = empDailyWageArray.some(
  (wage) => wage === PART_TIME_HOURS * WAGE_PER_HOUR
);
console.log("Has Part Time Wage?:", hasPartTimeWage);

const numOfWorkedDays = [...empDailyHoursMap.values()].filter(
  (hours) => hours > 0
).length;
console.log("Total Worked Days:", numOfWorkedDays);
