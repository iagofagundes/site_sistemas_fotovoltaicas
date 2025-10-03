let res = document.getElementById(`res`)

function principal(){
    let volts = Number(document.getElementById(`volts`).value)
    let placas = Number(document.getElementById(`placas`).value)

    let rec = (volts / placas) * 0.12 * 4.6 * 0.75

    console.log(rec)

    res.innerHTML = ``
    res.innerHTML = `A quantidade de energia gasta em Kwh é: ${rec.toFixed(2)} Kwh `
}