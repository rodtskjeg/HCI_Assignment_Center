document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    const loginError = document.getElementById("loginError");
    const catImageContainer = document.getElementById("catImageContainer");

    if (username === "user" && password === "user") {
      window.location.href = "../pages/main.html";
    } else if (username === "admin" && password === "admin") {
      window.location.href = "../pages/Tutor/tutorMain.html";
    } else {
      // Setzt die Fehlermeldung
      loginError.innerText =
        "⚠️ Wie du siehst, falsche Daten. Probier noch mal.";

      // Zeigt die Katze an und spielt den Sound
      catImageContainer.style.display = "block";
      catImageContainer.style.borderRadius = "15px";
    }
  });

document
  .getElementById("togglePassword")
  .addEventListener("click", function () {
    const passwordField = document.getElementById("password");
    const type = passwordField.type === "password" ? "text" : "password";
    passwordField.type = type;
    this.textContent = type === "password" ? "👁️" : "🙈";
  });
