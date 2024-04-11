let intro = document.querySelector('.intro');

window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        intro.style.top = '-100vh'; // Use style.top instead of computedStyleMap
    },500); // Add missing semicolon and specify the delay correctly
});