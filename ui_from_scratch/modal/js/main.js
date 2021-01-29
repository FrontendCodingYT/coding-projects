const modal = document.getElementById("modal-container");

window.addEventListener("load", (e) => {
  addModalEventListener();
});

function addModalEventListener() {
  modal.addEventListener("click", (e) => {
    if (e.target.id === "modal-container") {
      closeModal();
    }
  });
}

function closeModal() {
  modal.classList.remove("modal-container-open");
}

function openModal() {
  modal.classList.add("modal-container-open");
}
