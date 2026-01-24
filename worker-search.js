// worker-search.js
self.onmessage = function(e) {
    const { games, query } = e.data;
    if (!query) {
        postMessage(games.slice(0, 12)); // default page 1
        return;
    }
    const q = query.trim().toLowerCase();
    const filtered = games.filter(game =>
        game.name.toLowerCase().includes(q) ||
        game.appid.toString().includes(q)
    );
    postMessage(filtered);
};
