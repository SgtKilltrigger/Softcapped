const BUILDINGS_DATA = {
    gen_1: {
        name: "Generator 1",

        get res() { return player.points },
        set res(v) {player.points = v},

        effect(x) {
            let power = E(1)
            
            let effect = power.mul(x)

            return {power, effect}
        },

    },
    gen_2: {

        name: "Generator 2",

        get autoUnlocked() {},
        get noSpend() {},

        get res() { return player.points },
        set res(v) {player.points = v},

        cost(x=25) {return x },

        get_cost: x => formatPoints(x),

        effect(x) {
            let power = E(1)
            let production = power.mul(x)
            BUILDINGS_DATA.get_1.res = BUILDINGS_DATA.gen_1.res.add(production)

            return {power, production}
        },
    },
}