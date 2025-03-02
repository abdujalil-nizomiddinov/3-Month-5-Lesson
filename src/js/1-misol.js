function chiqar() {
  let ism = document.getElementById("ism").value.trim();
  let yosh = document.getElementById("yosh").value.trim();

  let xabar = "";

  if (ism === "" && yosh === "") {
    xabar =
      "<span style='color:red;'>Iltimos, ismingizni va yoshingizni kiriting !!!</span>";
  } else if (ism === "" || yosh === "") {
    xabar = "Iltimos, ma'lumotlarni to'liq kiriting !!!";
  } else {
    xabar = `<i>Assalomu alaykum ${ism} sizning yoshingiz: ${yosh}da</i>`;
  }

  document.getElementById("natija").innerHTML = xabar;
}
