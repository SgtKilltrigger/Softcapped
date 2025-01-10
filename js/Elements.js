function updateHTML() {
    // Punkte aktualisieren
    document.getElementById("points").innerText = `Points: ${formatPoints(player.points)}`;
    
    // Generator 1 aktualisieren
    document.getElementById("generator1").innerText = `Generator 1: ${formatPoints(player.generators.gen_1.owned)} (Produziert: ${formatPoints(player.generators.gen_1.owned.mul(player.generators.gen_1.productionRate))}/s)`;
    
    // Generator 2 aktualisieren
    document.getElementById("generator2").innerText = `Generator 2: ${formatPoints(player.generators.gen_2.owned)} (Produziert: ${formatPoints(player.generators.gen_2.owned.mul(player.generators.gen_2.productionRate))}/s)`;
}


