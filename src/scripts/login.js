document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "user" && password === "user") {
      window.location.href = "../pages/main.html";
    } else if (username === "admin" && password === "admin") {
      window.location.href = "../pages/Tutor/tutorMain.html";
    } else {
      console.log("Fehlermeldung wird gesetzt");
      document.getElementById("loginError").innerText =
        "⚠️ Falsche Daten. Bitte probieren Sie noch ein mal.";
    }
  });

// Funktion zum Anzeigen/Verstecken des Passworts beim Klicken auf das Auge-Icon
document
  .getElementById("togglePassword")
  .addEventListener("click", function () {
    const passwordField = document.getElementById("password");
    const type = passwordField.type === "password" ? "text" : "password";
    passwordField.type = type;
    this.textContent = type === "password" ? "👁️" : "🙈";
  });
