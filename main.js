const year = document.getElementById("publish-year");
const currentYear = new Date().getFullYear(); // Get the year from the system default time
year.setAttribute("datetime", currentYear); // Set a new attribute for html element with the target id
year.textContent = currentYear; // OR year.innerText = currentYear;