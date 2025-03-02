function chiqar() {
  let n1 = parseFloat(document.getElementById("n1").value);

  let xabar = "Kvadrati: " + (n1 ** 2) + "<br/>" + "Kubi: " + (n1 ** 3);

  document.getElementById("natija").innerHTML = xabar;
}
