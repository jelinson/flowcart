let csvData = null;

document.getElementById('csvFile').addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (event) => {
      csvData = event.target.result;
      document.getElementById('generateBtn').disabled = false;
      document.getElementById('error').style.display = 'none';
    };
    reader.readAsText(file);
  }
});

document.getElementById('generateBtn').addEventListener('click', () => {
  try {
    generateList();
  } catch (err) {
    showError('Error parsing CSV: ' + err.message);
  }
});

function showError(message) {
  const errorDiv = document.getElementById('error');
  errorDiv.textContent = message;
  errorDiv.style.display = 'block';
}

function generateList() {
  const data = parseCSV(csvData);
  const organized = organizeData(data);

  const preview = document.getElementById('preview');
  preview.innerHTML = '';

  // Generate two copies
  for (let copy = 0; copy < 2; copy++) {
    const printList = document.createElement('div');
    printList.className = 'print-list preview';
    renderList(printList, organized);
    preview.appendChild(printList);
  }

  // Add print button
  const printBtn = document.createElement('button');
  printBtn.textContent = 'Print List';
  printBtn.onclick = () => window.print();
  preview.appendChild(printBtn);
}
