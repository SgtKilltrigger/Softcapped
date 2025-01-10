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
    points: E(0),
    generators: {
        gen_1: {
            owned: E(1), // Anzahl der Generatoren 1
            productionRate: E(1), // Wie viele Punkte pro Sekunde generiert werden
        },
        gen_2: {
            owned: E(0), // Anzahl der Generatoren 2
            productionRate: E(1), // Wie viele "Generator 1" pro Sekunde generiert werden
        },
    },
};


