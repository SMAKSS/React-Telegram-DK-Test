export function copy(text) {
    let element;

    try {
        element = document.createElement('textarea');
        element.value = text;
        element.style.all = 'unset';
        element.style.position = 'fixed';
        element.style.top = 0;
        element.style.clip = 'rect(0, 0, 0, 0)';
        element.style.whiteSpace = 'pre';
        element.style.webkitUserSelect = 'text';
        element.style.MozUserSelect = 'text';
        element.style.msUserSelect = 'text';
        element.style.userSelect = 'text';

        document.body.appendChild(element);

        element.select();

        const successful = document.execCommand('copy');
        if (!successful) {
            console.error('unable to copy using execCommand');
        }
    } catch {
    } finally {
        if (element) {
            document.body.removeChild(element);
        }
    }
}
