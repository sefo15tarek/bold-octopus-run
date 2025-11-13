import { newsArticles, trendingArticles } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    const mainContent = document.getElementById('main-content');
    const trendingList = document.getElementById('trending-list');

    // --- Theme Toggle Logic ---

    // Function to apply the saved theme
    function applyTheme(theme) {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
            themeToggle.textContent = '☀️'; // Sun icon for light mode
        } else {
            body.classList.remove('dark-mode');
            themeToggle.textContent = '🌙'; // Moon icon for dark mode
        }
    }

    // Load theme from local storage or default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);

    // Event listener for theme toggle button
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = body.classList.contains('dark-mode') ? 'dark' : 'light';
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            localStorage.setItem('theme', newTheme);
            applyTheme(newTheme);
            
            console.log(`Theme switched to: ${newTheme}`);
        });
    }

    // --- Dynamic Content Rendering ---

    // 1. Render Main Articles
    function renderArticles() {
        const articlesContainer = document.createElement('div');
        
        newsArticles.forEach(article => {
            const articleElement = document.createElement('article');
            articleElement.classList.add('news-card');
            
            articleElement.innerHTML = `
                <img src="${article.image}" alt="صورة المقال ${article.id}" class="article-image">
                <div class="article-content">
                    <h3>${article.title}</h3>
                    <p>${article.summary}</p>
                    <a href="${article.link}" class="read-more">اقرأ المزيد</a>
                </div>
            `;
            articlesContainer.appendChild(articleElement);
        });

        // Insert articles after the H2 tag
        const h2 = mainContent.querySelector('h2');
        if (h2) {
            mainContent.insertBefore(articlesContainer, h2.nextSibling);
        } else {
            mainContent.appendChild(articlesContainer);
        }
    }

    // 2. Render Trending Sidebar
    function renderTrending() {
        trendingArticles.forEach(title => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<a href="#">${title}</a>`;
            trendingList.appendChild(listItem);
        });
    }

    renderArticles();
    renderTrending();
});