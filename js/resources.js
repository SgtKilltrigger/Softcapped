const RESOURCES = {
    points: {
        unl: ()=>true,

        desc: formatPoints(player.points) + "<br>" + formatGain(player.Points, tmp.pointsGain, true),
    }
}

function calc(dt) {
    player.points = player.points.add(
        player.generators.gen_1.owned.mul(player.generators.gen_1.productionRate).mul(dt)
    );

    player.generators.gen_1.owned = player.generators.gen_1.owned.add(
        player.generators.gen_2.owned.mul(player.generators.gen_2.productionRate).mul(dt)
    );
}
