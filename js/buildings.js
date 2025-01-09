const BUILDINGS_DATA = {
    gen_1: {
        name: "Generator 1",

        get autoUnlocked() {},
        get noSpend() {},

        get res() { return player.points },
        set res(v) {player.points = v},

        cost(x=this.level) {return getPointUpgradeCost(1, x) },
        get bulk() {return getPointUpgradeBulk(1, this.res) },

        get_cost: x => formatPoints(x),

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

        cost(x=this.level) {return getPointUpgradeCost(2, x) },
        get bulk() {return getPointUpgradeBulk(2, this.res) },

        get_cost: x => formatPoints(x),

        effect(x) {
            let power = E(1)
            
            let effect = power.mul(x)

            return {power, effect}
        },
    },
}