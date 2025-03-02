function chiqar() {
  let ism = document.getElementById("ism").value.trim();
  let yosh = document.getElementById("yosh").value.trim();

  let xabar = "";

  xabar = `<i>Assalomu alaykum ${ism} sizning yoshingiz: ${yosh}da</i>`;

  document.getElementById("natija").innerHTML = xabar;
}
