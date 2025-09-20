document.addEventListener('DOMContentLoaded', function() {
    const mediumContainer = document.getElementById('medium-publications');
    
    // Clear the loading message
    mediumContainer.innerHTML = '';
    
    // Medium RSS feed URL
    const rssUrl = 'https://medium.com/@ivancmoliveira/feed';
    
    // Use RSS2JSON API to bypass CORS issues
    const rssToJsonUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;
    
    fetch(rssToJsonUrl)
        .then(response => response.json())
        .then(data => {
            if (data.status === 'ok' && data.items && data.items.length > 0) {
                // Process each article
                data.items.slice(0, 5).forEach(item => { // Show up to 5 latest posts
                    const article = document.createElement('div');
                    article.className = 'research-item medium-item';
                    
                    // Format the date properly
                    const pubDate = new Date(item.pubDate);
                    const formattedDate = pubDate.toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    });
                    
                    // Extract first part of content as excerpt (remove HTML tags)
                    let excerpt = item.content.replace(/<[^>]*>/g, '');
                    if (excerpt.length > 200) {
                        excerpt = excerpt.substring(0, 200) + '...';
                    }
                    
                    article.innerHTML = `
                        <div class="research-title">
                            <a href="${item.link}" target="_blank" style="color: var(--terminal-yellow); text-decoration: none;">
                                ${item.title}
                            </a>
                        </div>
                        <div class="research-meta">Published: ${formattedDate} | Medium Publication</div>
                        <p>${excerpt}</p>
                        <div class="tech-tags">
                            <span class="tag">Medium</span>
                            <span class="tag">Security</span>
                            ${item.categories && item.categories.length > 0 ? 
                                item.categories.slice(0, 2).map(cat => `<span class="tag">${cat}</span>`).join('') : 
                                '<span class="tag">Research</span>'
                            }
                        </div>
                        <div class="terminal-output">
                            <div class="output-line">→ Read full article: <span class="string">${item.link}</span></div>
                        </div>
                    `;
                    
                    mediumContainer.appendChild(article);
                });
            } else {
                mediumContainer.innerHTML = `
                    <div class="terminal-output">
                        <div class="output-line terminal-red">[!] Error loading Medium publications</div>
                        <div class="output-line">[!] Please check if your Medium profile is public</div>
                        <div class="output-line">[!] Direct link: <a href="https://medium.com/@ivancmoliveira" target="_blank" style="color: var(--terminal-green);">medium.com/@ivancmoliveira</a></div>
                    </div>
                `;
            }
        })
        .catch(error => {
            console.error('Error fetching Medium feed:', error);
            mediumContainer.innerHTML = `
                <div class="terminal-output">
                    <div class="output-line terminal-red">[!] Connection error</div>
                    <div class="output-line">[!] Failed to load Medium publications</div>
                    <div class="output-line">[!] Direct link: <a href="https://medium.com/@ivancmoliveira" target="_blank" style="color: var(--terminal-green);">medium.com/@ivancmoliveira</a></div>
                </div>
            `;
        });
});