var tmp = {}

function resetTemp() {
    let d = new Date()
    keep = [tmp.el, tmp.prevSave]
    tmp = {
        
        GlobalSpeed: E(1),

        prestiges: {

        },

        upgrades: {
            main: {},
        },

        
    }

    resetTemp()
}

function updateSoftCap() {
    tmp.pointSoftCapPower = FORMS.pointSoftCapPower()
    tmp.pointsGain = FORMS.pointsGain()
}