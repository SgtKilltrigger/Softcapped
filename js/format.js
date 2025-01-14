function formatPoints() {
    let x = player.points
    if (x instanceof Decimal) {
        if (x.gte(1e6)) {
            return x.toExpontial(2)
        } else {
            return x.toFixed(3)
        }
    }
}

let value = player.points

let gen1value = player.generators.gen_1.owned
let gen2value = player.generators.gen_2.owned
/*let gen3value = player.generators.gen_3.owned
let gen4value = player.generators.gen_4.owned
let gen5value = player.generators.gen_5.owned
let gen6value = player.generators.gen_6.owned
let gen7value = player.generators.gen_7.owned
let gen8value = player.generators.gen_8.owned*/
let gen1rate = player.generators.gen_1.productionRate
let gen2rate = player.generators.gen_2.productionRate
/*let gen3rate = player.generators.gen_3.productionRate
let gen4rate = player.generators.gen_4.productionRate
let gen5rate = player.generators.gen_5.productionRate
let gen6rate = player.generators.gen_6.productionRate
let gen7rate = player.generators.gen_7.productionRate
let gen8rate = player.generators.gen_8.productionRate*/


function formatGain(value, rate) {
        return `${value} (+${rate})`
}

let formattedGainGen1 = formatGain(gen1value, gen1rate, true)
let formattedGainGen2 = formatGain(gen2value, gen2rate, true)
/*let formattedGainGen3 = formatGain(gen3value, gen3rate, true)
let formattedGainGen4 = formatGain(gen4value, gen4rate, true)
let formattedGainGen5 = formatGain(gen5value, gen5rate, true)
let formattedGainGen6 = formatGain(gen6value, gen6rate, true)
let formattedGainGen7 = formatGain(gen7value, gen7rate, true)*/