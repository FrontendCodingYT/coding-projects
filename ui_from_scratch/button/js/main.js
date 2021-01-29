window.addEventListener("load", (e) => {
  addRipleListeners();
});

function addRipleListeners() {
  const buttons = document.getElementsByClassName("ripple");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("mousedown", rippleEvent);
  }
}

function rippleEvent(e) {
  const button = e.currentTarget;

  const x = e.pageX - button.offsetLeft;
  const y = e.pageY - button.offsetTop;

  const duration = 350;
  let animationFrame, animationStart;

  function animationStep(timestamp) {
    if (!animationStart) animationStart = timestamp;

    const frame = timestamp - animationStart;

    if (frame < duration) {
      const easing = frame / duration;

      button.style.backgroundImage = `radial-gradient(circle at ${x}px ${y}px, rgba(0, 0, 0, ${0.5 * (1 - easing)}) ${90 * easing}%, transparent ${90 * easing}%)`;

      animationFrame = window.requestAnimationFrame(animationStep);
    } else {
      button.style.backgroundImage = "none";
      window.cancelAnimationFrame(animationFrame);
    }
  }

  animationFrame = window.requestAnimationFrame(animationStep);
}
