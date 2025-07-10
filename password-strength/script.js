let pass = document.getElementById("password");
let msg = document.getElementById("msg");
let str = document.getElementById("Strength");

pass.addEventListener("input", () => {
  if (pass.value.length > 0) {
    msg.style.display = "block";
  } else {
    msg.style.display = "none";
  }
  if (pass.value.length < 4) {
    str.innerHTML = "weak.";
    str.style.color = "red";
    pass.style.borderColor = "red";
  } else if (4 <= pass.value.length && pass.value.length < 8) {
    str.innerHTML = "medium.";
    str.style.color = "yellow";
    pass.style.borderColor = "yellow";
  } else if (8 <= pass.value.length) {
    str.innerHTML = "strong.";
    str.style.color = "green";
    pass.style.borderColor = "green";
  }
});
