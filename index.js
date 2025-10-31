function logToScreen(message) {
    const outputDiv = document.getElementById('output');
    const p = document.createElement('p');
    p.textContent = message;
    outputDiv.appendChild(p);
}

function runDemo() {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '<h3>Demo Results:</h3>';
    
    logToScreen("=== Creating Music Players ===");
    
    const players = [
        new AdvancedMusicPlayer(75, "Bohemian Rhapsody - Queen", true, "Rock"),
        new AdvancedMusicPlayer(60, "Clair de Lune - Debussy", false, "Classical")
    ];

    logToScreen("Player 1:");
    logToScreen(players[0].show());
    
    logToScreen("Player 2:");
    logToScreen(players[1].show());

    logToScreen("=== Testing Methods ===");

    logToScreen(`First player volume: ${players[0].volume}`);
    players[0].volume = 85;
    logToScreen(`Updated volume: ${players[0].volume}`);

    logToScreen(`Second player EQ: ${players[1].equalizerPreset}`);
    players[1].equalizerPreset = "Jazz";
    logToScreen(`Updated EQ: ${players[1].equalizerPreset}`);

    const clonedPlayer = AdvancedMusicPlayer.clone(players[0]);
    logToScreen(`Original and clone are the same object: ${players[0] === clonedPlayer}`);
    logToScreen("Cloned player:");
    logToScreen(clonedPlayer.show());

    const copiedPlayer = players[1].copy();
    logToScreen(`Original and copy are the same object: ${players[1] === copiedPlayer}`);

    logToScreen("=== Demo Completed ===");
}

function clearOutput() {
    document.getElementById('output').innerHTML = '';
}

document.addEventListener('DOMContentLoaded', function() {
    logToScreen("Page loaded. Click 'Run Demo' to start demonstration.");
});