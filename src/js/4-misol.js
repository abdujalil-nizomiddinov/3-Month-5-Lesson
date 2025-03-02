function chiqar() {
  let n1 = parseInt(document.getElementById("n1").value);
  let now = new Date().getFullYear();
  let xabar = now - n1;

  document.getElementById("natija").innerHTML = xabar;
}
