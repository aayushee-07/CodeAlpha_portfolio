// === Scroll to Top Button ===
const topButton = document.createElement("button");
topButton.id = "topBtn";
topButton.innerText = "⬆";
document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.bottom = "30px";
topButton.style.right = "30px";
topButton.style.padding = "10px 15px";
topButton.style.backgroundColor = "#0d6efd";
topButton.style.color = "white";
topButton.style.border = "none";
topButton.style.borderRadius = "5px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.zIndex = "999";

window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
};

topButton.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// === Dark Mode Toggle ===
const toggleBtn = document.createElement("button");
toggleBtn.innerText = "🌙";
toggleBtn.style.position = "fixed";
toggleBtn.style.top = "20px";
toggleBtn.style.right = "20px";
toggleBtn.style.padding = "8px 12px";
toggleBtn.style.backgroundColor = "#333";
toggleBtn.style.color = "white";
toggleBtn.style.border = "none";
toggleBtn.style.borderRadius = "5px";
toggleBtn.style.cursor = "pointer";
toggleBtn.style.zIndex = "1000";
document.body.appendChild(toggleBtn);

let isDark = false;

toggleBtn.addEventListener("click", () => {
  isDark = !isDark;
  document.body.style.backgroundColor = isDark ? "#121212" : "#f9f9f9";
  document.body.style.color = isDark ? "#ffffff" : "#333";
  toggleBtn.innerText = isDark ? "☀️" : "🌙";
});
