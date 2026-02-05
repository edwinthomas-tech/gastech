document.querySelectorAll(".letter-animate").forEach(el => {
  const text = el.innerText;
  el.innerHTML = "";

  [...text].forEach((char, index) => {
    const span = document.createElement("span");
    span.innerText = char === " " ? "\u00A0" : char;
    span.style.animationDelay = `${index * 0.04}s`;
    el.appendChild(span);
  });
});

/* Fade paragraphs smoothly */
document.querySelectorAll(".text-fade").forEach((el, i) => {
  el.style.animationDelay = `${i * 0.15}s`;
});
