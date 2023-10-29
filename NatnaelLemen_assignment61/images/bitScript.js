function bitsCalc() {
    var bits = parseFloat(document.getElementById('bitsBox').value);
    var result = Math.pow(2,bits);
    var message = bits + ' can hold ' + result + ' values';
    document.getElementById('outputDiv').innerHTML = message;
}