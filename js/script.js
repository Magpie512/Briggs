let currentPage = 0;
const pages = document.querySelectorAll('.page');

function nextPage() {
    if (currentPage < pages.length - 1) {
        const current = pages[currentPage];
        
        // First, trigger the visual flip
        current.classList.add('flipped');
        
        // Wait for the flip to be halfway done before swapping visibility
        setTimeout(() => {
            current.classList.remove('active');
            currentPage++;
            const next = pages[currentPage];
            next.classList.add('active');
            next.classList.remove('flipped'); // Ensure the new page isn't already flipped
        }, 400); 
    }
}

function prevPage() {
    if (currentPage > 0) {
        const current = pages[currentPage];
        current.classList.remove('active');
        
        currentPage--;
        const previous = pages[currentPage];
        previous.classList.add('active');
        
        // Small delay to ensure the browser registers the 'active' class 
        // before we remove 'flipped' to trigger the reverse animation
        setTimeout(() => {
            previous.classList.remove('flipped');
        }, 50);
    }
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') nextPage();
    if (e.key === 'ArrowLeft') prevPage();
});