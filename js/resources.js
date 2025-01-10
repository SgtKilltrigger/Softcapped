const RESOURCES = {
    points: {
        unl: ()=>true,

        desc: formatPoints(player.points) + "<br>" + formatGain(player.Points, tmp.pointsGain, true),
    }
}

function calc(dt) {
    // Generator 1 produziert Punkte
    player.points = player.points.add(
        player.generators.gen_1.owned.mul(player.generators.gen_1.productionRate).mul(dt)
    );

    // Generator 2 produziert Generator 1
    player.generators.gen_1.owned = player.generators.gen_1.owned.add(
        player.generators.gen_2.owned.mul(player.generators.gen_2.productionRate).mul(dt)
    );
}
