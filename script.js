const games = {
    'game1': 'https://www.crazygames.com/embed/bullet-force-multiplayer',
    'game2': 'https://krunker.io/',
    'game3': 'https://www.crazygames.com/embed/rally-point-3',
    'game4': 'https://www.crazygames.com/embed/mad-truck-challenge',
    'game5': 'https://www.crazygames.com/embed/drift-hunters',
    'game6': 'https://www.crazygames.com/embed/super-bike-the-champion',
    'game7': 'https://www.crazygames.com/embed/penalty-shooters-2',
    'game8': 'https://www.crazygames.com/embed/table-tennis-world-tour',
    'game9': 'https://www.crazygames.com/embed/8-ball-billiards-classic',
    'game10': 'https://www.crazygames.com/embed/paper-io-2',
    'game11': 'https://www.crazygames.com/embed/2048',
    'game12': 'https://www.gameflare.com/embed/subway-clash-3d/',
    'game15': 'https://www.crazygames.com/embed/smash-karts',
    'game16': 'https://www.crazygames.com/embed/worms-zone',
    'game17': 'https://www.crazygames.com/embed/super-star-car',
    'game18': 'https://www.crazygames.com/embed/tank-trouble',
    'game19': 'https://www.crazygames.com/embed/gun-mayhem-2',
    'game20': 'https://www.crazygames.com/embed/getaway-shootout',
    'game21': 'https://www.crazygames.com/embed/city-car-driving-simulator',
    'game22': 'https://www.crazygames.com/embed/rooftop-snipers',
    'game23': 'https://www.crazygames.com/embed/basket-random',
    'game24': 'https://slither.io/',
    'game25': 'https://diep.io/',
    'game26': 'https://www.crazygames.com/embed/happy-wheels',
    'game27': 'https://skribbl.io/',
    'game28': 'https://subwaysurfersgame.io/'
};

function openGameModal(title, gameId) {
    const modal = document.getElementById('gameModal');
    const gameTitle = document.getElementById('modalGameTitle');
    const gameIframe = document.getElementById('gameIframe');
    gameTitle.textContent = title;
    gameIframe.src = games[gameId];
    modal.style.display = 'flex';
}

function closeGameModal() {
    const modal = document.getElementById('gameModal');
    const gameIframe = document.getElementById('gameIframe');
    modal.style.display = 'none';
    gameIframe.src = '';
}