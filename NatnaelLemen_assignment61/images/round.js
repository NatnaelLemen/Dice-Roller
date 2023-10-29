function computeNumber() {
    var number = parseFloat(document.getElementById('numberBox').value)
    var rounded = Math.round(number*100)/100
    document.getElementById('outputDiv').innerHTML = number + ' rounded to two decimal places is ' + rounded
}