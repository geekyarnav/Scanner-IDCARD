function generatorQR() {
    var data = document.getElementById("qr-data").value
    var qrcode = new QRCode(document.getElementById('qrcode'))
    qrcode.makeCode(data)
       
}