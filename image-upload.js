document.addEventListener("DOMContentLoaded", () => {
    // Element-Referenzen
    const dropArea = document.getElementById('image-upload');
    const fileInput = document.getElementById('image-upload-input');
    const form = document.getElementById('image-search-form');
    const encodedImageInput = document.getElementById('image-file-input');


    // Drag-and-Drop-Handling
    dropArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropArea.classList.add('dragging'); // Visuelles Feedback hinzufügen
    });

    dropArea.addEventListener('dragleave', () => {
        dropArea.classList.remove('dragging'); // Feedback entfernen
    });

    dropArea.addEventListener('drop', (e) => {
        e.preventDefault();
        dropArea.classList.remove('dragging'); // Feedback entfernen

        const file = e.dataTransfer.files[0];
        if (isValidImage(file)) {
            handleFileUpload(file);
        } else {
            alert("Bitte laden Sie eine gültige Bilddatei hoch (.jpg, .png, .gif).");
        }
    });

    // Datei-Input-Handling
    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (isValidImage(file)) {
            handleFileUpload(file);
        } else {
            alert("Bitte wählen Sie eine gültige Bilddatei aus.");
        }
    });

    // Validierungsfunktion für unterstützte Bildtypen
    function isValidImage(file) {
        const validImageTypes = ["image/jpeg", "image/png", "image/gif"];
        return file && validImageTypes.includes(file.type);
    }

    // Verarbeiten der hochgeladenen Datei
    function handleFileUpload(file) {
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(file);
        encodedImageInput.files = dataTransfer.files;

        // Optional: Zeige das Vorschaubild an
        displayPreview(file);

        // Absenden des Formulars
        form.submit();
    }

    // Funktion für Vorschaubild
    function displayPreview(file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.alt = "Vorschau";
            img.style.maxWidth = "200px";
            img.style.marginTop = "10px";

            // Füge das Bild zur Drop-Zone hinzu (oder einem separaten Bereich)
            dropArea.appendChild(img);
        };
        reader.readAsDataURL(file);
    }
});