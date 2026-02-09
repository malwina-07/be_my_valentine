const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 500 - 150;
  const y = Math.random() * 500 - 100; 

  const rotate = Math.random() * 40 - 20; 

  noBtn.style.transform = `translate(${x}px, ${y}px) rotate(${rotate}deg)`;
});

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.animationDuration = 4 + Math.random() * 4 + "s";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 8000);
}

setInterval(createHeart, 300);

function confettiBurst() {
      const colors = ["#ff4d6d", "#ffb3c1", "#ff0000", "#bd0606", "#ff0606", "#fe74d2", "#ff8bd6"]; // pink, red, yellow, teal, blue

  for (let i = 0; i < 500; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.background = colors[Math.floor(Math.random() * colors.length)];

    const x = (Math.random() - 0.5) * 1500 + "px";
    const y = (Math.random() - 0.5) * 1500 + "px";

    confetti.style.setProperty("--x", x);
    confetti.style.setProperty("--y", y);
    confetti.style.animationDelay = Math.random() * 0.5 + "s";

    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 2500);
  }
}
const mainCard = document.getElementById("main-card");
const yesCard = document.getElementById("yes-card");


yesBtn.addEventListener("click", () => {
  confettiBurst();
  setTimeout(() => {
mainCard.classList.add("hidden");
yesCard.classList.remove("hidden");
    
  }, 1000);

});
