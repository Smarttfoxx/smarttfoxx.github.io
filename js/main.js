// Set current year and start year
document.getElementById('current-year').textContent = new Date().getFullYear();
document.getElementById('start-year').textContent = new Date().getFullYear() - 5; // Adjust as needed

// Add terminal cursor effect
const header = document.querySelector('header');
const cursor = document.createElement('span');
cursor.className = 'terminal-cursor';
header.appendChild(cursor);

// Load Medium publications after main content
document.addEventListener('DOMContentLoaded', function() {
    // Create and add the Medium feed script
    const mediumScript = document.createElement('script');
    mediumScript.src = 'js/medium-feed.js';
    document.body.appendChild(mediumScript);
});