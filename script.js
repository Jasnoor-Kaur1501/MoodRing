const buttons = document.querySelectorAll(".moods button");
const ring = document.querySelector(".ring");
const text = document.querySelector(".mood-text");
const body = document.body;

let currentMood = null;
let intensity = 1;

const moods = {
  calm: {
    bg: "radial-gradient(circle at top, #dff3ff, #c7e9ff)",
    ring: "linear-gradient(135deg, #9adfff, #c7f0ff)",
    text: "Everything feels slow. Breathe."
  },
  happy: {
    bg: "radial-gradient(circle at top, #fff3c7, #ffe28a)",
    ring: "linear-gradient(135deg, #ffd86f, #ffb703)",
    text: "Soft joy. Small wins. Light everywhere."
  },
  chaotic: {
    bg: "radial-gradient(circle at top, #2b2b2b, #000000)",
    ring: "linear-gradient(135deg, #ff006e, #8338ec, #3a86ff)",
    text: "Too many thoughts. Too much energy."
  },
  sleepy: {
    bg: "radial-gradient(circle at top, #ececff, #c9c9ff)",
    ring: "linear-gradient(135deg, #bdb2ff, #ffc6ff)",
    text: "Low battery. Soft world."
  },
  romantic: {
    bg: "radial-gradient(circle at top, #ffe3ec, #ffc2d1)",
    ring: "linear-gradient(135deg, #ff8fab, #fb6f92)",
    text: "Warm. Slow. A little dramatic."
  },
  focused: {
    bg: "radial-gradient(circle at top, #eafff3, #c7f9e9)",
    ring: "linear-gradient(135deg, #06d6a0, #80ffdb)",
    text: "Clear head. Quiet momentum."
  }
};

function applyMood(name) {
  const mood = moods[name];
  if (!mood) return;

  currentMood = name;
  intensity = 1;

  body.className = name === "chaotic" ? "chaotic" : "";
  body.style.background = mood.bg;
  ring.style.background = mood.ring;
  ring.style.transform = "scale(1)";
  text.textContent = mood.text;

  localStorage.setItem("moodring-mood", name);
}

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    applyMood(btn.dataset.mood);
  });
});

/* Restore last mood */
const savedMood = localStorage.getItem("moodring-mood");
if (savedMood) applyMood(savedMood);

let holdInterval = null;

ring.addEventListener("mousedown", startHold);
ring.addEventListener("touchstart", startHold);

window.addEventListener("mouseup", stopHold);
window.addEventListener("touchend", stopHold);

function startHold() {
  if (!currentMood) return;

  holdInterval = setInterval(() => {
    intensity = Math.min(intensity + 0.02, 1.6);
    ring.style.transform = `scale(${intensity})`;
  }, 30);
}

function stopHold() {
  clearInterval(holdInterval);
}

