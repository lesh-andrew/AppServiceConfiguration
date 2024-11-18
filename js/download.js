function downloadFile(fileName, fileBase64) {
    const link = document.createElement('a');
    link.download = fileName;
    link.href = `data:application/octet-stream;base64,${fileBase64}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function resetComponent() {
        const textareas = document.querySelectorAll('textarea');

        textareas?.forEach((val, key, parent) => {
                val.value = "";
                val.textContent = "";
        });
}