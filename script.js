const buttons = document.querySelectorAll(".moods button");
const ring = document.querySelector(".ring");
const text = document.querySelector(".mood-text");
const body = document.body;

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

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const key = btn.dataset.mood;
    const mood = moods[key];

    // reset chaotic mode every time
    body.classList.remove("chaotic");

    body.style.background = mood.bg;
    ring.style.background = mood.ring;
    text.textContent = mood.text;

    // ONLY chaotic activates special mode
    if (key === "chaotic") {
      body.classList.add("chaotic");
    }

    // subtle pulse so it feels alive
    ring.animate(
      [{ transform: "scale(1)" }, { transform: "scale(1.05)" }, { transform: "scale(1)" }],
      { duration: 600, easing: "ease-out" }
    );
  });
});
