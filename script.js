function openGameModal(title, gameId) {
    const modal = document.getElementById('gameModal');
    const iframe = document.getElementById('gameIframe');
    const modalTitle = document.getElementById('modalGameTitle');
    
    const gameUrls = {
        'game1': 'https://www.gameflare.com/embed/bullet-force-multiplayer/',
        'game2': 'https://krunker.io/',
        'game3': 'https://www.gameflare.com/embed/rally-point-3/',
        'game4': 'https://www.gameflare.com/embed/mad-truck-challenge-special/',
        'game5': 'https://www.gameflare.com/embed/drift-hunters/',
        'game6': 'https://www.gameflare.com/embed/super-bike-the-champion/',
        'game7': 'https://www.gameflare.com/embed/penalty-shooters-2/',
        'game8': 'https://www.gameflare.com/embed/table-tennis-world-tour/',
        'game9': 'https://www.gameflare.com/embed/8-ball-billiards-classic/',
        'game10': 'https://paper-io.com/paper-io-2/',
        'game11': 'https://www.gameflare.com/embed/2048/',
        'game12': 'https://www.gameflare.com/embed/subway-clash-3d/',
        'game15': 'https://www.gameflare.com/embed/smash-karts/',
        'game16': 'https://www.gameflare.com/embed/worms-zone/',
        'game17': 'https://www.gameflare.com/embed/super-star-car/',
        'game18': 'https://www.gameflare.com/embed/tank-trouble/',
        'game19': 'https://www.gameflare.com/embed/gun-mayhem-2/',
        'game20': 'https://www.gameflare.com/embed/getaway-shootout/',
        'game21': 'https://www.gameflare.com/embed/city-car-driving-simulator/',
        'game22': 'https://www.gameflare.com/embed/rooftop-snipers/',
        'game23': 'https://www.gameflare.com/embed/basket-random/',
        'game24': 'https://slither.io/',
        'game25': 'https://diep.io/',
        'game26': 'https://www.gameflare.com/embed/happy-wheels/',
        'game27': 'https://skribbl.io/',
        'game28': 'https://www.gameflare.com/embed/subway-surfers/'
    };

    modalTitle.textContent = title;
    iframe.src = gameUrls[gameId];
    modal.style.display = 'flex';
}

function closeGameModal() {
    const modal = document.getElementById('gameModal');
    const iframe = document.getElementById('gameIframe');
    modal.style.display = 'none';
    iframe.src = '';
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeGameModal();
    }
});

document.getElementById('gameModal').addEventListener('click', (event) => {
    if (event.target === document.getElementById('gameModal')) {
        closeGameModal();
    }
});

// Filtro de categorías
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        const categories = document.querySelectorAll('.category');
        const buttons = document.querySelectorAll('.filter-btn');

        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        categories.forEach(cat => {
            if (category === 'all') {
                cat.style.display = 'block';
            } else {
                cat.style.display = cat.getAttribute('data-category') === category ? 'block' : 'none';
            }
        });
    });
});