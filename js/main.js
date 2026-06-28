/* ===== LexVita - Main JavaScript ===== */

// Fetch posts data and render
async function loadPosts() {
  try {
    const response = await fetch('/blog/posts.json');
    if (!response.ok) throw new Error('Failed to load posts');
    const posts = await response.json();
    
    // Sort by date descending
    posts.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Render on home page (recent-posts) and blog page (all-posts)
    const recentContainer = document.getElementById('recent-posts');
    const allContainer = document.getElementById('all-posts');

    if (recentContainer) {
      recentContainer.innerHTML = posts.slice(0, 3).map(renderCard).join('');
    }
    if (allContainer) {
      allContainer.innerHTML = posts.map(renderCard).join('');
    }
  } catch (err) {
    console.error('Error loading posts:', err);
    document.querySelectorAll('.blog-list').forEach(el => {
      el.innerHTML = '<p style="color:var(--gray);">No posts yet. Check back soon!</p>';
    });
  }
}

function renderCard(post) {
  const tagsHtml = (post.tags || []).map(t => `<span class="tag">${t}</span>`).join('');
  const imageHtml = post.image ? `<img class="card-image" src="${post.image}" alt="${post.title}" loading="lazy">` : '';
  return `
    <div class="blog-card">
      ${imageHtml}
      <div class="date">${formatDate(post.date)}</div>
      <h2><a href="${post.url}">${post.title}</a></h2>
      <p>${post.excerpt || ''}</p>
      ${tagsHtml ? `<div class="tags">${tagsHtml}</div>` : ''}
    </div>
  `;
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric'
  });
}

// Load posts on page load
document.addEventListener('DOMContentLoaded', loadPosts);
