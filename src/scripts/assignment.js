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

// Fakultät im HTML anzeigen
document.getElementById("facultyName").innerText = "Kurs: " + facultyDisplay;

// Fakultät auch im Header-Titel anzeigen
const headerTitle = document.getElementById("headerTitle");
headerTitle.textContent += selectedFaculty ? ` - ${facultyDisplay}` : "";

// Dateiname anzeigen, wenn eine Datei hochgeladen wird
const fileUpload = document.getElementById("fileUpload");
fileUpload.addEventListener("change", function () {
  const file = this.files[0];
  const fileNameDisplay = document.getElementById("fileNameDisplay");

  if (file) {
    fileNameDisplay.innerText = "Ausgewählte Datei: " + file.name;
  } else {
    fileNameDisplay.innerText = "";
  }
});

// Formular-Submit: Neue Zeile zur Tabelle hinzufügen
document
  .getElementById("assignmentForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Validierung der Eingabefelder
    const projectName = document.getElementById("projectName").value;
    const studentName = document.getElementById("studentName").value;
    const timeSpent = document.getElementById("timeSpent").value;
    const status = document.getElementById("status").value;
    const fileUpload = document.getElementById("fileUpload");

    if (
      !projectName ||
      !studentName ||
      !timeSpent ||
      !status ||
      !fileUpload.files.length
    ) {
      alert("Bitte füllen Sie alle Felder aus und laden Sie eine Datei hoch.");
      return; // Verhindert das Absenden des Formulars
    }

    // Haupt-Content verbergen und Ladebildschirm anzeigen
    document.getElementById("mainContent").style.display = "none";
    document.getElementById("loadingScreen").style.display = "flex";

    // Simuliere einen Uploadprozess mit einem Timeout
    setTimeout(() => {
      // Ladebildschirm wieder verbergen und Haupt-Content anzeigen
      document.getElementById("loadingScreen").style.display = "none";
      document.getElementById("mainContent").style.display = "block";

      // Neue Zeile zur Tabelle hinzufügen
      const fileName = fileUpload.files[0].name;

      const table = document
        .getElementById("assignmentTable")
        .getElementsByTagName("tbody")[0];
      const newRow = table.insertRow();

      newRow.insertCell(0).innerHTML =
        `<input type="checkbox" class="select-file" />`;
      newRow.insertCell(1).innerText = projectName;
      newRow.insertCell(2).innerText = studentName;
      newRow.insertCell(3).innerText = timeSpent + " Stunden";

      const statusCell = newRow.insertCell(4);
      statusCell.innerHTML = `<span class="status-label ${status
        .toLowerCase()
        .replace(" ", "-")}">${status}</span>`;

      newRow.insertCell(5).innerText = fileName;
      newRow.insertCell(6).innerText = "--";

      // Formular zurücksetzen und Dateianzeige löschen
      document.getElementById("assignmentForm").reset();
      document.getElementById("fileNameDisplay").innerText = "";
    }, 2000); // Simulierter Upload dauert 2 Sekunden
  });

// Beispiel: Diese Funktion aufrufen, wenn du neue Daten hinzufügst oder abrufst
function updateStudentPointsDisplay(studentName, points) {
  const studentPointsDisplay = document.getElementById("studentPointsDisplay");
  studentPointsDisplay.innerText = `${studentName} hat insgesamt ${points} Punkte.`;
}

// Rauminfo anzeigen oder ausblenden
document
  .getElementById("showRoomInfoBtn")
  .addEventListener("click", function () {
    const roomInfo = document.getElementById("roomInfo");
    roomInfo.style.display =
      roomInfo.style.display === "none" ? "block" : "none";
  });

// Löschen-Button für die Tabelle
document
  .querySelector(".delete-file-btn")
  .addEventListener("click", function () {
    const selectedFiles = document.querySelectorAll(".select-file:checked");

    if (selectedFiles.length > 0) {
      selectedFiles.forEach((file) => {
        const row = file.closest("tr");
        row.remove();
      });
    } else {
      // Wenn keine Dateien ausgewählt sind, leere die gesamte Tabelle
      const table = document
        .getElementById("assignmentTable")
        .getElementsByTagName("tbody")[0];
      table.innerHTML = "";
    }
  });

// Ersetzen-Button für die Tabelle
document
  .querySelector(".replace-file-btn")
  .addEventListener("click", function () {
    const selectedFiles = document.querySelectorAll(".select-file:checked");

    if (selectedFiles.length > 0) {
      selectedFiles.forEach((file) => {
        const row = file.closest("tr");
        const fileInput = row.querySelector('input[type="file"]');
        fileInput.click();

        fileInput.addEventListener("change", function () {
          const newFileName = fileInput.files[0].name;
          row.cells[5].innerText = newFileName;
        });
      });
    }
  });
