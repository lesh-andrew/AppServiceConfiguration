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

        const _errorMessage = document.querySelector('#error-message');

        _errorMessage.textContent = '';
        _errorMessage.style.display = 'none';
}

function errorMessage(message) {
        ErrorHandler.Error(message);
}

class ErrorHandler {
        static Area(selector = '') {
                if (!selector) selector = '#error-message'
                return document.querySelectorAll(selector);
        }
        static Error(message, selector = undefined) {
                const errorMessageAreas = ErrorHandler.Area(selector);

                errorMessageAreas?.forEach((val, ndx, arr) => {
                        val.textContent = message;
                        val.style.display = 'inline-block';
                });
        }
}