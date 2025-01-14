document.getElementById("submitBtn").addEventListener("click", function () {
  const faculty = document.getElementById("faculty").value;
  const maskotText = document.querySelector(".maskot-text p");

  // Fakultät im localStorage speichern, wenn eine Fakultät ausgewählt wurde
  if (faculty !== "") {
    localStorage.setItem("selectedFaculty", faculty);

    // Weiterleitung zur Assignment-Seite
    window.location.href = "../pages/assignment.html";
  } else {
    console.log("Fehlermeldung wird gesetzt");
    document.getElementById("notSelectedCourse").innerText =
      "⚠️ Bitte wählen Sie einen Kurs.";
    maskotText.innerText = "Quatsch! Du brauchst einen Kurs!";
  }
});

const courseCard = document.querySelector(".faculty-selection");
courseCard.addEventListener("mouseenter", function () {
  // Katze sagt: "Hier kannst du Kurse auswählen"
  const maskotText = document.querySelector(".maskot-text p");
  maskotText.innerText = "Hier kannst du Kurse auswählen";
});

courseCard.addEventListener("mouseleave", function () {
  // Text zurücksetzen
  const maskotText = document.querySelector(".maskot-text p");
  maskotText.innerText =
    "Ähhh, hast du noch kein Assignment hochgeladen oder was?";
});

document.getElementById("catImage").addEventListener("click", function () {
  const meowSound = document.getElementById("meowSound");
  meowSound.play();
});

const submitButton = document.getElementById("submitBtn");
submitButton.addEventListener("mouseenter", function () {
  // Katze sagt: "Schneller!"
  const maskotText = document.querySelector(".maskot-text p");
  maskotText.innerText = "Schneller! Schneller Junge!";
});

submitButton.addEventListener("mouseleave", function () {
  // Text zurücksetzen
  const maskotText = document.querySelector(".maskot-text p");
  maskotText.innerText =
    "Ähhh, hast du noch kein Assignment hochgeladen oder was?";
});

// Header Links
const headerLinks = document.querySelectorAll("header nav a"); // Alle Links im Header auswählen

headerLinks.forEach((link) => {
  link.addEventListener("mouseenter", function () {
    const maskotText = document.querySelector(".maskot-text p");
    if (link.innerText === "Home") {
      maskotText.innerText = "Macht keinen Sinn oder?";
    } else if (link.innerText === "Profil") {
      maskotText.innerText = "Es ist leider keine Insta.";
    } else if (link.innerText === "Abmelden") {
      maskotText.innerText = "Nein Steffen, Nein!";
    }
  });

  link.addEventListener("mouseleave", function () {
    // Text zurücksetzen, wenn der Cursor den Link verlässt
    const maskotText = document.querySelector(".maskot-text p");
    maskotText.innerText =
      "Ähhh, hast du noch kein Assignment hochgeladen oder was?";
  });
});

// Katze - 5 Sekunden Cursor Hover
const catImage = document.getElementById("catImage");

let catHoverTimeout;

catImage.addEventListener("mouseenter", function () {
  // Starten des Timers, wenn der Cursor über der Katze ist
  catHoverTimeout = setTimeout(function () {
    const maskotText = document.querySelector(".maskot-text p");
    maskotText.innerText = "Hör auf mich zu streichen du!";
  }, 3000); // 5000 ms = 5 Sekunden
});

catImage.addEventListener("mouseleave", function () {
  // Timer abbrechen, wenn der Cursor die Katze verlässt
  clearTimeout(catHoverTimeout);

  // Text zurücksetzen
  const maskotText = document.querySelector(".maskot-text p");
  maskotText.innerText =
    "Ähhh, hast du noch kein Assignment hochgeladen oder was?";
});
