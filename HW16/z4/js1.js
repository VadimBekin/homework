const cardsContainer = document.getElementById('cards-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const currentPageSpan = document.getElementById('current-page');

let allPosts = [];
let currentPage = 1;
const postsPerPage = 5;

async function fetchPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) throw new Error(error);
    allPosts = await response.json();
    renderPosts();
  } catch (error) {
    console.error(error);
  }
}

function renderPosts() {
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const postsToShow = allPosts.slice(startIndex, endIndex);

  cardsContainer.innerHTML = '';

  postsToShow.forEach(post => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
                <h3>${post.title}</h3>
                <span>${post.body}</span>
                <p>Post ID: ${post.id}</p>
            `;
    cardsContainer.appendChild(card);
  });

  updatePaginationControls();
}

function updatePaginationControls() {
  currentPageSpan.textContent = currentPage;
  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage >= Math.ceil(allPosts.length / postsPerPage);
}

prevBtn.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    renderPosts();
  }
});

nextBtn.addEventListener('click', () => {
  const maxPage = Math.ceil(allPosts.length / postsPerPage);
  if (currentPage < maxPage) {
    currentPage++;
    renderPosts();
  }
});

fetchPosts();
