# Age Calculator Website

This is a simple Age Calculator website that allows users to calculate their age in various units, including years, months, weeks, days, hours, minutes, and seconds.

## Features

- **Calculate Age:** Input your birthdate, and the calculator will display your age in:
  - Years, months, and days
  - Total months and days
  - Total weeks and days
  - Total days
  - Total hours
  - Total minutes
  - Total seconds
- **Real-Time Calculation:** The results are calculated instantly based on the current date.
- **Future Date Restriction:** The input field restricts the selection of future dates.

## Technologies Used

- **HTML:** For the basic structure of the web page.
- **CSS:** For styling the input field, button, and result display (you can add your own styles).
- **JavaScript:** For handling the age calculation logic.

## Usage

1. Clone or download the repository.
2. Open the `index.html` file in your web browser.
3. Select your birthdate from the date picker.
4. Click the "Calculate Age" button.
5. The results will be displayed, showing your age in various formats.

## Code Explanation

The JavaScript code performs the following steps:

1. **Date Input:** The date input field (`<input type="date">`) is used to capture the user's birthdate. The maximum date allowed is set to today's date, preventing future dates from being selected.

2. **Age Calculation:**
   - The function `calculateAge()` computes the difference between the current date and the selected birthdate.
   - The difference is calculated in terms of years, months, and days.
   - Additional calculations are performed to determine the total number of days, weeks, hours, minutes, and seconds since the birthdate.

3. **Display Results:** The results are dynamically displayed on the web page using `innerHTML`.

## Example Output

When you input your birthdate and click "Calculate Age," you will see results in the following format:

- **Years, months, and days:** e.g., `12 years, 8 months, 0 days`
- **Months and days:** e.g., `152 months, 0 days`
- **Weeks and days:** e.g., `661 weeks, 0 days`
- **Total days:** e.g., `4,627 days`
- **Total hours:** e.g., `111,048 hours`
- **Total minutes:** e.g., `6,662,880 minutes`
- **Total seconds:** e.g., `399,772,800 seconds`

# License
This project is licensed under the MIT License - see the LICENSE file for details.

# NAME :- SUVAM MOHAPATRA