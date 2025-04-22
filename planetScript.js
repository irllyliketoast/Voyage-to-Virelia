// Toggle Day/Night Theme
const toggleButton = document.getElementById('themeToggle');
toggleButton.addEventListener('click', () => {
  const currentTheme = document.documentElement.dataset.theme;
  document.documentElement.dataset.theme = currentTheme === 'day' ? '' : 'day';
});

// Handle Modal Logic
const cards = document.querySelectorAll('.planet-card');
const modal = document.getElementById('modal');
const modalContent = modal.querySelector('.modal-content');
const modalTitle = modal.querySelector('#modalTitle');
const modalClose = modal.querySelector('.close-modal');

cards.forEach(card => {
	card.addEventListener('click', () => {
	  const title = card.dataset.title;
	  const content = card.dataset.content;

	  modalTitle.textContent = title;
	  modal.querySelector('p').textContent = content;
	  modal.classList.remove('hidden');
	});

  // Also allow keyboard activation
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      card.click();
    }
  });
});

// Close Modal with X Button
modalClose.addEventListener('click', () => {
  modal.classList.add('hidden');
});

// Close Modal by Clicking Outside
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.add('hidden');
  }
});

// Optional: Close Modal with Escape Key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    modal.classList.add('hidden');
  }
});
