// Select the date input element by its ID
let userInput = document.getElementById("date");

// Set the maximum date allowed in the input to today's date, preventing future dates from being selected
userInput.max = new Date().toISOString().split("T")[0];

// Select the result display element by its ID
let result = document.getElementById("result");

// Function to calculate the user's age based on the input date
function calculateAge() {
  // Get the selected birthdate from the input field and convert it to a Date object
  let birthDate = new Date(userInput.value);

  // Extract the day, month, and year from the birthdate
  let d1 = birthDate.getDate(); // Store the day of the birthdate
  let m1 = birthDate.getMonth() + 1; // Store the month of the birthdate (add 1 because months are 0-indexed)
  let y1 = birthDate.getFullYear(); // Store the year of the birthdate

  // Get today's date and extract the day, month, and year
  let today = new Date();
  let d2 = today.getDate(); // Store today's day
  let m2 = today.getMonth() + 1; // Store today's month (add 1 because months are 0-indexed)
  let y2 = today.getFullYear(); // Store today's year

  // Declare variables for the calculated age (years, months, days)
  let d3, m3, y3;

  // Calculate the difference in years between today and the birthdate
  y3 = y2 - y1;

  // Check if the current month is greater than or equal to the birth month
  // If true, calculate the difference in months directly
  // If false, subtract one year and calculate the difference in months by adjusting for the year boundary
  if (m2 >= m1) {
    m3 = m2 - m1; // Calculate the month difference
  } else {
    y3--; // Decrease the year difference by 1 if the current month is earlier than the birth month
    m3 = 12 + m2 - m1; // Calculate the adjusted month difference (12 months in a year)
  }

  // Check if today's day is greater than or equal to the birth day
  // If true, calculate the difference in days directly
  // If false, decrease the month difference and calculate the adjusted day difference by accounting for the previous month
  if (d2 >= d1) {
    d3 = d2 - d1; // Calculate the day difference
  } else {
    m3--; // Decrease the month difference by 1 if today's day is earlier than the birth day
    d3 = getDaysInMonth(y1, m1) + d2 - d1; // Calculate the adjusted day difference by adding days from the previous month
  }

  // Adjust if month difference becomes negative after the day adjustment
  if (m3 < 0) {
    m3 = 11; // Set month difference to 11 (as it represents the previous year's month)
    y3--; // Decrease the year difference by 1
  }

  // Calculate the total number of days between today and the birthdate
  let totalDays = Math.floor((today - birthDate) / (1000 * 60 * 60 * 24));

  // Calculate the total number of weeks from the total days
  let totalWeeks = Math.floor(totalDays / 7);

  // Calculate the total number of months by multiplying years by 12 and adding the month difference
  let totalMonths = y3 * 12 + m3;

  // Calculate the total number of hours by multiplying total days by 24 hours
  let totalHours = totalDays * 24;

  // Calculate the total number of minutes by multiplying total hours by 60 minutes
  let totalMinutes = totalHours * 60;

  // Calculate the total number of seconds by multiplying total minutes by 60 seconds
  let totalSeconds = totalMinutes * 60;

  // Display the results in different formats (years, months, weeks, days, hours, minutes, seconds)
  result.innerHTML = `
        <p>You are <span>${y3}</span> years, <span>${m3}</span> months, <span>${d3}</span> days</p>
        <p>or <span>${totalMonths}</span> months, <span>${d3}</span> days</p>
        <p>or <span>${totalWeeks}</span> weeks, <span>${d3}</span> days</p>
        <p>or <span>${totalDays}</span> days</p>
        <p>or <span>${totalHours}</span> hours</p>
        <p>or <span>${totalMinutes}</span> minutes</p>
        <p>or <span>${totalSeconds}</span> seconds</p>
    `;
}

// Helper function to get the number of days in a given month and year
// It returns the number of days by creating a new Date object for the next month and subtracting 1 day
function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}
