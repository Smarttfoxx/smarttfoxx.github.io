// Set current year and start year
document.getElementById('current-year').textContent = new Date().getFullYear();
document.getElementById('start-year').textContent = new Date().getFullYear() - 5; // Adjust as needed

// Add terminal cursor effect
const header = document.querySelector('header');
const cursor = document.createElement('span');
cursor.className = 'terminal-cursor';
header.appendChild(cursor);

// No need to load medium-feed.js here - add it directly in index.html