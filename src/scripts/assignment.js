// Fakultät aus localStorage auslesen
const selectedFaculty = localStorage.getItem("selectedFaculty");

const facultyNameMap = {
  engineering: "Ingenieurwissenschaften",
  business: "Wirtschaftswissenschaften",
  law: "Rechtswissenschaften",
  medicine: "Medizin",
  arts: "Geisteswissenschaften",
};

// Fakultätsnamen übersetzen und anzeigen
const facultyDisplay = selectedFaculty
  ? facultyNameMap[selectedFaculty] || "Keine Fakultät ausgewählt"
  : "Keine Fakultät ausgewählt";

document.getElementById("facultyName").innerText =
  "Fakultät: " + facultyDisplay;

// Fakultät auch im Header-Titel anzeigen
const headerTitle = document.getElementById("headerTitle");
headerTitle.textContent += selectedFaculty ? ` - ${facultyDisplay}` : "";

// Dateiname anzeigen
const fileUpload = document.getElementById("fileUpload");
fileUpload.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    document.getElementById("fileNameDisplay").innerText =
      "Ausgewählte Datei: " + file.name;
  } else {
    document.getElementById("fileNameDisplay").innerText = "";
  }
});

// Formular-Submit: Neue Zeile zur Tabelle hinzufügen
document
  .getElementById("assignmentForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Eingabewerte sammeln
    const projectName = document.getElementById("projectName").value;
    const studentName = document.getElementById("studentName").value;
    const timeSpent = document.getElementById("timeSpent").value;
    const status = document.getElementById("status").value;
    const fileName = fileUpload.files[0]
      ? fileUpload.files[0].name
      : "Keine Datei";

    // Neue Zeile erstellen
    const table = document
      .getElementById("assignmentTable")
      .getElementsByTagName("tbody")[0];
    const newRow = table.insertRow();

    // Zellen hinzufügen
    newRow.insertCell(0).innerText = projectName;
    newRow.insertCell(1).innerText = studentName;
    newRow.insertCell(2).innerText = timeSpent + " Stunden";

    // Status mit farblichem Label
    const statusCell = newRow.insertCell(3);
    statusCell.innerHTML = `<span class="status-label ${status
      .toLowerCase()
      .replace(" ", "-")}">${status}</span>`;

    newRow.insertCell(4).innerText = fileName;
    newRow.insertCell(5).innerText = "--"; // Punkte-Feld bleibt leer

    // Formular zurücksetzen
    document.getElementById("assignmentForm").reset();
    document.getElementById("fileNameDisplay").innerText = "";
  });
