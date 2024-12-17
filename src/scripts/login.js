document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); 

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "" || password === "") {
      alert("Bitte Benutzername und Passwort eingeben!");
    } else {
      alert("Login erfolgreich! Du wirst weitergeleitet...");
      window.location.href = "../pages/main.html";
    }
  });
