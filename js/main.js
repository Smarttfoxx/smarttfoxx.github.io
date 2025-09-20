// Set current year and start year
document.getElementById('current-year').textContent = new Date().getFullYear();
document.getElementById('start-year').textContent = new Date().getFullYear() - 5; // Adjust as needed

// Add terminal cursor effect
const header = document.querySelector('header');
const cursor = document.createElement('span');
cursor.className = 'terminal-cursor';
header.appendChild(cursor);

// Load Medium publications after DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // No need to dynamically load the script - it's already in index.html
    // The medium-feed.js will automatically run on DOMContentLoaded
});