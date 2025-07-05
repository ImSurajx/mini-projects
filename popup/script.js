let popup = document.querySelector(".popup");

function openPopup() {
  popup.classList.add("open-popup");
}

function closePopup() {
  popup.classList.remove("open-popup");
}

// ✅ 1. Close on ESC key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closePopup();
  }
});

// ✅ 2. Close on outside click
document.addEventListener("click", function (e) {
  if (popup.classList.contains("open-popup") && !popup.contains(e.target) && !e.target.classList.contains("btn")) {
    closePopup();
  }
});