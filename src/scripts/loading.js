export const loading = () => {
  const initDot = document.querySelector("#loading");
  const loading = setInterval(function () {
    if (initDot.innerHTML.length == 5) {
      initDot.innerHTML = '';
    } else {
      initDot.innerHTML += '.';
    }
  }, 350); // Dot Speed

  const loadingMessage = document.querySelector('#loadingH1');

  setTimeout(function () {
    clearInterval(loading);
    loadingMessage.style.display = 'none';
  }, 1500);
}