// Load HTML content into a target element
async function loadHTML(path, elementId) {
  try {
    const res = await fetch(path);
    const html = await res.text();
    document.getElementById(elementId).innerHTML = html;
  } catch (err) {
    document.getElementById(elementId).innerHTML = "<p>Error loading content.</p>";
  }
}

// Navigate to page
async function navigateTo(page) {
  const path = `./pages/${page}.html`;
  await loadHTML(path, 'main-content');
  history.pushState({ page }, '', `#${page}`);
}

// Load layout and default page
window.addEventListener('DOMContentLoaded', () => {
  loadHTML('./components/navbar.html', 'navbar');
  loadHTML('./components/sidebar.html', 'sidebar');

  const defaultPage = location.hash?.substring(1) || 'dashboard';
  navigateTo(defaultPage);
});

// Browser back/forward navigation
window.addEventListener('popstate', (e) => {
  const page = e.state?.page || 'dashboard';
  navigateTo(page);
});

const API_BASE_URL = 'https://smartinventory-01.onrender.com'
