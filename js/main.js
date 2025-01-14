var date = Date.now();

const FORMS = {
    getGlobalSpeed() {
        let x = E(1) //Speed multiplier

        return x

    },

    pointsGain() {
        let x = E(1) //points gain

        x = x.add(BUILDINGS_DATA.gen_1.effect)


        return x
    },

    pointSoftCap() {
        let s = E(1) //start Softcap

        return s


    },

    pointSoftCapPower() {
        let p = E(1/10) //Softcap power

        return E(1).div(p.add(1))
    }
}

function buyGenerator(generatorKey, player) {
    const generator = BUILDINGS_DATA[generatorKey]
    const cost = generator.cost

    if (!generator || generator.bought || generator.res.lt(cost)) {
        return false
    }

    generator.res = generator.res.sub(cost)
    generator.bought = true

    return true
    
    
    }



function loop() {
    diff = Date.now()-date;
    updateTemp()
    updateHTML()
    calc(diff/1000);
    date = Date.now()
    setTimeout(loop, 1000 / 30);
}
