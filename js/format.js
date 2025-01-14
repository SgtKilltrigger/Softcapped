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