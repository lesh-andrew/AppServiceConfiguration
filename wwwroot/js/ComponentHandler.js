class ComponentHandler {
    static Area(selector = '') {
        if (!selector) selector = '#error-message';
        return document.querySelectorAll(selector);
    }

    static WriteError(message, selector = undefined) {
        const errorMessageAreas = ComponentHandler.Area(selector);

        errorMessageAreas?.forEach((val, ndx, arr) => {
            val.textContent = message;
            val.style.display = 'inline-block';
        });
    }

    static DownloadResult(fileName, fileBase64) {
        const link = document.createElement('a');
        link.download = fileName;
        link.href = `data:application/octet-stream;base64,${fileBase64}`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    static Reset() {
        ComponentHandler.#resetTextareas();
        ComponentHandler.#resetErrorMessages();
    }

    static #resetTextareas(selector = 'textarea') {
        const textareas = document.querySelectorAll(selector);

        textareas?.forEach((val, key, parent) => {
            val.value = "";
            val.textContent = "";
        }) ?? console.debug('No textareas to reset.');
    }

    static #resetErrorMessages(selector = '#error-message') {
        const _errorMessage = document.querySelector(selector);

        _errorMessage.textContent = '';
        _errorMessage.style.display = 'none';
    }
}
