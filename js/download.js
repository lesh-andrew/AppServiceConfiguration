function downloadFile(fileName, fileBase64) {
        ComponentHandler.DownloadResult(fileName, fileBase64);
}

function resetComponent() {
        ComponentHandler.Reset();
}

function errorMessage(message) {
        ComponentHandler.WriteError(message);
}

