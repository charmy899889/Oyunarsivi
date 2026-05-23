// Oyun listesi
const games = [
    { name: "Caillou Balon Toplama", file: "kayu-balon-toplama.swf" },
    { name: "Tank Oyunu", file: "tank-oyunu.swf" }
];

const container = document.getElementById('game-grid');

// Oyunları listeleme fonksiyonu
function renderGames() {
    container.innerHTML = ""; // Önce ekranı temizle
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
}

// Oyunu başlatan fonksiyon
function playGame(fileName) {
    // Ekranı temizle ve oyunu yerleştireceğimiz alanı hazırla
    container.innerHTML = `
        <div id="ruffle-container"></div>
        <br><br>
        <button onclick="location.reload()">Ana Sayfaya Dön</button>
    `;

    // Ruffle oynatıcısını başlat
    const ruffle = window.RufflePlayer.newest();
    const player = ruffle.createPlayer();
    const containerDiv = document.getElementById("ruffle-container");
    containerDiv.appendChild(player);
    player.load(fileName);
}

// Sayfa açıldığında oyunları listele
renderGames();
