var date = Date.now();
var player

const FORMS = {
    getGlobalSpeed() {
        let x = E(1) //Speed multiplier

        return x

    },

    pointsGain() {
        let x = E(1) //points gain

        x = x.add()


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

function loop() {
    diff = Date.now()-date;
    ssf[1]()
    updateTemp()
    updateHTML()
    calc(diff/1000);
    date = Date.now()
}
