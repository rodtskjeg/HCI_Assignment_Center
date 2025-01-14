// Fakultät aus localStorage auslesen
const selectedFaculty = localStorage.getItem("selectedFaculty");

// Map für die Übersetzung der Fakultäten
const facultyNameMap = {
  hci: "HCI",
  gbs: "GBS",
  mathe_2: "Mathe II",
  prog_2: "Programmieren II",
  data: "Datenstrukturen",
};

// Fakultätsnamen übersetzen und anzeigen
const facultyDisplay = selectedFaculty
  ? facultyNameMap[selectedFaculty] || "Kein Kurs ausgewählt"
  : "Kein Kurs ausgewählt";

document.getElementById("facultyName").innerText = "Kurs: " + facultyDisplay;

const headerTitle = document.getElementById("headerTitle");
headerTitle.textContent += selectedFaculty ? ` - ${facultyDisplay}` : "";

// Datei-Upload anzeigen
document.getElementById("fileUpload").addEventListener("change", function () {
  const file = this.files[0];
  const fileNameDisplay = document.getElementById("fileNameDisplay");
  fileNameDisplay.innerText = file ? `Ausgewählte Datei: ${file.name}` : "";
});

// Formular-Submit: Neue Zeile zur Tabelle hinzufügen
document
  .getElementById("assignmentForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const projectName = document.getElementById("projectName").value;
    const timeSpent = document.getElementById("timeSpent").value;
    const status = document.getElementById("status").value;
    const fileUpload = document.getElementById("fileUpload");

    if (!projectName || !timeSpent || !status || !fileUpload.files.length) {
      alert("Bitte füllen Sie alle Felder aus und laden Sie eine Datei hoch.");
      return;
    }

    document.getElementById("mainContent").style.display = "none";
    document.getElementById("loadingScreen").style.display = "flex";

    setTimeout(() => {
      document.getElementById("loadingScreen").style.display = "none";
      document.getElementById("mainContent").style.display = "block";

      const fileName = fileUpload.files[0].name;
      const table = document
        .getElementById("assignmentTable")
        .getElementsByTagName("tbody")[0];

      const newRow = table.insertRow();
      newRow.insertCell(0).innerHTML =
        `<input type="checkbox" class="select-file" />`;
      newRow.insertCell(1).innerText = projectName;
      newRow.insertCell(2).innerText = "Max Mustermann";
      newRow.insertCell(3).innerText = `${timeSpent} Stunden`;
      const statusCell = newRow.insertCell(4);
      statusCell.innerHTML = `<span class="status-label ${status.toLowerCase().replace(" ", "-")}">${status}</span>`;
      newRow.insertCell(5).innerText = fileName;
      newRow.insertCell(6).innerText = "0"; // Standardmäßig 0 Punkte

      document.getElementById("assignmentForm").reset();
      document.getElementById("fileNameDisplay").innerText = "";

      updateTotalPoints();
    }, 2000);
  });

// Punkte-Update-Funktion
function updateTotalPoints() {
  const table = document
    .getElementById("assignmentTable")
    .getElementsByTagName("tbody")[0];

  let totalPoints = 0;

  for (let row of table.rows) {
    const pointsCell = row.cells[6];
    const points = parseInt(pointsCell.innerText, 10);
    if (!isNaN(points)) {
      totalPoints += points;
    }
  }

  document.getElementById("totalPoints").innerText = totalPoints;
}

// Zeilen löschen und Punkte aktualisieren
document
  .querySelector(".delete-file-btn")
  .addEventListener("click", function () {
    const selectedFiles = document.querySelectorAll(".select-file:checked");
    if (selectedFiles.length > 0) {
      selectedFiles.forEach((file) => {
        const row = file.closest("tr");
        row.remove();
      });
      updateTotalPoints();
    } else {
      alert("Keine Zeile ausgewählt.");
    }
  });

// Initiale Punkteberechnung
document.addEventListener("DOMContentLoaded", updateTotalPoints);
