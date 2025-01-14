function E(x){return new Decimal(x)};
const EINF = Decimal.dInf
const FPS = 20

Decimal.prototype.modular=Decimal.prototype.mod=function (other){
    other=E(other);
    if (other.eq(0)) return E(0);
    if (this.sign*other.sign==-1) return this.abs().mod(other.abs()).neg();
    if (this.sign==-1) return this.abs().mod(other.abs());
    return this.sub(this.div(other).floor().mul(other));
}

function getPlayerData() {
    let s = {
        points: E(0),

    }

    for (let x in BUILDINGS_DATA) s.build[x] = {
        amt: E(0)
    }

    return s
}

function wipe(reload=false) {
    if (reload) {
        wipe()
        save()
        location.reload()
    }
    else player = getPlayerData
}

function loadPlayer(load) {
    const DATA = getPlayerData()
    convertStringToDecimal()

    checkBuildings()
}

function save(){
    let str = btoa(JSON.stringify(player))
    if (cannotSave() || findNaN(str, true)) return
    if (localStorage.getItem("testSave") == '') wipe()
    localStorage.setItem("testSave",str)
    tmp.prevSave = localStorage.getItem("TestSave")
    if (tmp.saving < 1) {addNotify("Game Saved", 3); tmp.saving++}
}

function load(x){
    if(typeof x == "string" & x != ''){
        loadPlayer(JSON.parse(atob(x)))
    } else {
        wipe()
    }
}

let player = {
    points: E(1),
    generators: {
        gen_1: {
            owned: E(1),
            productionRate: E(1),
        },
        gen_2: {
            owned: E(0),
            productionRate: E(1),
        }
    }
}

function calc(dt) {
    for (let genKey in player.generators) {
        let generator = player.generators[genKey]
        let resourceKey = generator.produces

        if (resourceKey && player[resourceKey]) {
            let productionRate = generator.owned
                .mul(generator.productionRate)
                .mul(generator.upgradeMultiplier || E(1))
            
            player[resourceKey] = player[resourceKey].add(productionRate.mul(dt))
        }
    }
}


