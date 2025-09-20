// Medium RSS feed integration using JSONP (bypasses CORS)
document.addEventListener('DOMContentLoaded', function() {
    const articlesContainer = document.getElementById('medium-articles');
    
    function fetchMediumArticles(maxArticles = 5) {
        return new Promise((resolve, reject) => {
            const rssUrl = 'https://medium.com/@ivancmoliveira/feed';
            const callbackName = 'mediumCallback_' + Date.now();
            
            window[callbackName] = function(data) {
                // Clean up
                script.parentNode.removeChild(script);
                delete window[callbackName];
                
                if (data.status === 'ok' && data.items && data.items.length > 0) {
                    resolve(data.items.slice(0, maxArticles));
                } else {
                    reject(new Error('No articles found in feed'));
                }
            };
            
            const script = document.createElement('script');
            script.src = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}&callback=${callbackName}`;
            script.onerror = () => {
                script.parentNode.removeChild(script);
                delete window[callbackName];
                reject(new Error('Script load failed'));
            };
            
            document.head.appendChild(script);
            
            // Timeout after 10 seconds
            setTimeout(() => {
                if (window[callbackName]) {
                    script.parentNode.removeChild(script);
                    delete window[callbackName];
                    reject(new Error('Request timed out'));
                }
            }, 10000);
        });
    }
    
    function stripHtml(html) {
        const tmp = document.createElement('div');
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || '';
    }
    
    function truncateText(text, maxLength = 200) {
        if (text.length <= maxLength) return text;
        return text.substr(0, maxLength).substr(0, text.lastIndexOf(' ')) + '...';
    }
    
    function formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    }
    
    function displayArticles(articles) {
        let html = '';
        
        articles.forEach(article => {
            const cleanDescription = stripHtml(article.description || article.content || '');
            const truncatedDescription = truncateText(cleanDescription, 180);
            const formattedDate = formatDate(article.pubDate);
            
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
                        ${article.categories && article.categories.length > 0 ? 
                            item.categories.slice(0, 2).map(cat => `<span class="tag">${cat}</span>`).join('') : 
                            '<span class="tag">Research</span>'
                        }
                    </div>
                    
                    <div class="terminal-output">
                        <div class="output-line">→ Read full article: <span class="string">${article.link}</span></div>
                    </div>
                </div>
            `;
        });
        
        articlesContainer.innerHTML = html;
    }
    
    function displayError(message) {
        articlesContainer.innerHTML = `
            <div class="terminal-output">
                <div class="output-line terminal-red">[!] ERROR: ${message}</div>
                <div class="output-line">[!] Direct link: <a href="https://medium.com/@ivancmoliveira" target="_blank" style="color: var(--terminal-green);">medium.com/@ivancmoliveira</a></div>
                <div class="output-line">[!] Check if your Medium profile is public</div>
            </div>
        `;
    }
    
    fetchMediumArticles()
        .then(displayArticles)
        .catch(error => {
            console.error('Medium feed error:', error);
            displayError(error.message || 'Failed to load articles');
        });
});