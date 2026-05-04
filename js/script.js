  const btn = document.getElementById("topBtn");

  window.onscroll = function () {
    if (window.scrollY > 200) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  };

  btn.onclick = function () {
    window.scrollTo(0, 0);
  };

  const cards = document.querySelectorAll(".Card");

cards.forEach(function(card) {
  card.addEventListener("click", function () {
    card.classList.toggle("active");
  });
});