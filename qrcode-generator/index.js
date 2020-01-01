function genQR(str) {
  var str = document.querySelector("input").value;
  QRCode.toCanvas(document.getElementById("canvas"), str, function(error) {
    if (error) console.error(error);
    console.log("success!");
  });
}
