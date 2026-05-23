const games = [
    { name: "Caillou balon toplama", file: "kayu-balon-toplama.swf" },
    { name: "Tank Oyunu", file: "tank-oyunu.swf" }
    // Yeni oyun eklemek istersen buraya virgül koyup aynısından ekle
];

const container = document.getElementById('game-grid');

games.forEach(game => {
    const div = document.createElement('div');
    div.className = 'game-card';
    div.innerHTML = `
        <h3>${game.name}</h3>
        <button onclick="playGame('${game.file}')">Oyna</button>
        <a href="${game.file}" download>İndir</a>
    `;
    container.appendChild(div);
});

function playGame(file) {
    container.innerHTML = `
        <ruffle-player>
            <param name="movie" value="${file}">
        </ruffle-player>
        <br><button onclick="location.reload()">Geri Dön</button>
    `;
}
