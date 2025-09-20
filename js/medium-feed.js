document.addEventListener('DOMContentLoaded', function() {
    const articlesContainer = document.getElementById('medium-articles');

    // Always show loading state first
    articlesContainer.innerHTML = `
        <div class="terminal-output">
            <div class="output-line">[i] Checking for recent security articles...</div>
        </div>
    `;

    // Use absolute path with cache busting
    const cacheBust = new Date().getTime();
    const feedUrl = '/data/medium-feed.json?' + cacheBust;

    fetch(feedUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(articles => {
            // Verify we have valid data
            if (!articles || !Array.isArray(articles) || articles.length === 0) {
                throw new Error('Invalid feed data format');
            }

            // Process and display articles
            let html = '';
            const maxArticles = 5;

            articles.slice(0, maxArticles).forEach(article => {
                try {
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
                                <a href="${article.link}" target="_blank" rel="noopener noreferrer" style="color: var(--terminal-yellow); text-decoration: none;">
                                    ${article.title}
                                </a>
                            </div>
                            <div class="research-meta">Published: ${formattedDate}</div>
                            <p>${truncatedDescription}</p>

                            <div class="tech-tags">
                                <span class="tag">Medium</span>
                                <span class="tag">Security</span>
                                ${article.categories && article.categories.length > 0 ?
                                    article.categories.slice(0, 2).map(cat => `<span class="tag">${cat}</span>`).join('') :
                                    '<span class="tag">Research</span>'
                                }
                            </div>

                            <a href="${article.link}" target="_blank" rel="noopener noreferrer" class="terminal-button">
                                <span class="button-icon">❱</span> READ FULL ARTICLE
                            </a>
                        </div>
                    `;
                } catch (e) {
                    console.error('Error processing article:', e, article);
                }
            });

            if (html) {
                articlesContainer.innerHTML = html;
            } else {
                throw new Error('No valid articles to display');
            }
        })
        .catch(error => {
            console.error('Medium feed error:', error);
            articlesContainer.innerHTML = `
                <div class="terminal-output">
                    <div class="output-line terminal-red">[!] FEED ERROR: ${error.message}</div>
                    <div class="output-line">[i] Possible causes:</div>
                    <div class="output-line">    • GitHub Action hasn't run yet</div>
                    <div class="output-line">    • Medium profile isn't public</div>
                    <div class="output-line">    • Invalid JSON data</div>
                    <div class="output-line">[✓] Manual check: <a href="/data/medium-feed.json" target="_blank" style="color: var(--terminal-green);">/data/medium-feed.json</a></div>
                    <div class="output-line">[!] Direct Medium: <a href="https://medium.com/@ivancmoliveira" target="_blank" style="color: var(--terminal-green);">medium.com/@ivancmoliveira</a></div>
                </div>
            `;
        });
});