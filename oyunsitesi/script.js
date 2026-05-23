// Basit bir oyun listesi (Buraya kendi oyunlarını ekleyeceksin)
const games = [
    { name: "Oyun 1", url: "oyun1.swf" },
    { name: "Oyun 2", url: "oyun2.swf" }
];

const container = document.getElementById('game-grid');

games.forEach(game => {
    const div = document.createElement('div');
    div.className = 'game-card';
    div.innerHTML = `
        <h3>${game.name}</h3>
        <button onclick="alert('Bu butona basınca ${game.url} dosyası oynatılacak')">Oyna</button>
    `;
    container.appendChild(div);
});