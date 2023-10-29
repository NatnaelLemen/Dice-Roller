function SelectImage() {
    var roll = Math.floor(6*Math.random()) + 1;
    var imgName = 'images/die' + roll + '.gif';
    document.getElementById("dieImg1").src = imgName;
    var roll2 = Math.floor(6*Math.random()) + 1;
    var imgName2 = 'images/die' + roll2 + '.gif';
    document.getElementById("dieImg2").src = imgName2;
}