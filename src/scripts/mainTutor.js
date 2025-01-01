document.getElementById("submitBtn").addEventListener("click", () => {
  const selectedFaculty = document.getElementById("faculty").value;

  if (selectedFaculty) {
    // Speichern der Fakultät in sessionStorage
    sessionStorage.setItem("faculty", selectedFaculty);

    // Weiterleitung zur Aufgaben-Übersicht-Seite
    window.location.href = "assignmentTutor.html"; // Hier die Seite zur Aufgabenübersicht
  } else {
    alert("Bitte eine Fakultät auswählen.");
  }
});
