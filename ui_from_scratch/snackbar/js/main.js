let snackbarTimeout;

function showSnackbar(time) {
  const snackbarElement = document.getElementById("snackbar");

  snackbarElement.classList.add("snackbar-visible");

  snackbarTimeout = setTimeout(() => {
    console.log("first timeout");
    snackbarElement.classList.remove("snackbar-visible");
  }, time);
}

function dismissSnackbar() {
  const snackbarElement = document.getElementById("snackbar");

  snackbarElement.classList.remove("snackbar-visible");

  clearInterval(snackbarTimeout);
}
