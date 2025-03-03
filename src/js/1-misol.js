if (!sessionStorage.getItem("wonGame")) {
  alert(
    "Ushbu sahifadan foydalana olish uchun son topish o'yinda yutishingiz kerak !!!"
  );
  document.body.style.display = "none";

  let max;
  while (true) {
    max = parseInt(prompt("Maksimal random son nechchi bo'lsin ?"), 10);

    if (!isNaN(max) && max > 0) {
      break;
    }

    alert("Noto‘g‘ri qiymat kiritildi! Iltimos, to‘g‘ri son kiriting.");
  }

  const random = Math.floor(Math.random() * max) + 1;
  let player = null;

  while (player !== random) {
    player = parseInt(prompt(`1 dan ${max} gacha son kiriting:`), 10);

    if (isNaN(player)) {
      alert("Iltimos, son kiriting!");
    } else if (player < random) {
      alert("Kattaroq son kiriting!");
    } else if (player > random) {
      alert("Kichikroq son kiriting!");
    } else {
      alert("Tabriklayman! Siz to‘g‘ri topdingiz! 🎉");
      sessionStorage.setItem("wonGame", "true");
      document.body.style.display = "flex";
    }
  }
}

function chiqar() {
  let ism = document.getElementById("ism").value.trim();
  let yosh = document.getElementById("yosh").value.trim();

  let xabar = "";

  xabar = `<i>Assalomu alaykum ${ism} sizning yoshingiz: ${yosh}da</i>`;

  document.getElementById("natija").innerHTML = xabar;
}
