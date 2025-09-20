document.addEventListener('DOMContentLoaded', function() {
    const articlesContainer = document.getElementById('medium-articles');
    
    // Show loading state
    articlesContainer.innerHTML = `
        <div class="terminal-output">
            <div class="output-line">[+] Loading recent security articles...</div>
            <div class="output-line">[i] Checking local cache...</div>
            <div class="output-line">[✓] Using pre-fetched data (updated via GitHub Actions)</div>
        </div>
    `;
    
    // Load the pre-fetched feed (same domain, no CORS issues)
    fetch('data/medium-feed.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(articles => {
            if (!articles || articles.length === 0) {
                throw new Error('No articles found in feed');
            }
            
            // Process and display articles
            let html = '';
            const maxArticles = 5;
            
            for (let i = 0; i < Math.min(maxArticles, articles.length); i++) {
                const article = articles[i];
                
                // Format the date
                const pubDate = new Date(article.pubDate);
                const formattedDate = pubDate.toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                });
                
                // Extract and clean description
                const parser = new DOMParser();
                const doc = parser.parseFromString(article.description || '', 'text/html');
                let cleanDescription = doc.body.textContent || '';
                
                // Truncate description
                let truncatedDescription = cleanDescription;
                if (cleanDescription.length > 180) {
                    truncatedDescription = cleanDescription.substring(0, 180) + '...';
                }
                
                html += `
                    <div class="research-item medium-article">
                        <div class="research-title">
                            <a href="${article.link}" target="_blank" style="color: var(--terminal-yellow); text-decoration: none;">
                                ${article.title}
                            </a>
                        </div>
                        <div class="research-meta">Published: ${formattedDate} | Medium Publication</div>
                        <p>${truncatedDescription}</p>
                        
                        <div class="tech-tags">
                            <span class="tag">Medium</span>
                            <span class="tag">Security</span>
                            <span class="tag">Malware</span>
                        </div>
                        
                        <div class="terminal-output">
                            <div class="output-line">→ Read full article: <span class="string">${article.link}</span></div>
                        </div>
                    </div>
                `;
            }
            
            articlesContainer.innerHTML = html;
        })
        .catch(error => {
            console.error('Error loading Medium feed:', error);
            articlesContainer.innerHTML = `
                <div class="terminal-output">
                    <div class="output-line terminal-red">[!] ERROR: ${error.message}</div>
                    <div class="output-line">[!] Last update may be stale</div>
                    <div class="output-line">[!] Direct link: <a href="https://medium.com/@ivancmoliveira" target="_blank" style="color: var(--terminal-green);">medium.com/@ivancmoliveira</a></div>
                </div>
            `;
        });
});