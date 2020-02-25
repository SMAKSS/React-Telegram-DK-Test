export function findLastTextNode(element) {
    if (element.nodeType === Node.TEXT_NODE) {
        return element;
    }

    for (let i = element.childNodes.length - 1; i >= 0; i--) {
        const textNode = findLastTextNode(element.childNodes[i]);
        if (textNode) {
            return textNode;
        }
    }

    return null;
}

export function focusInput(element) {
    if (!element) return;

    const textNode = findLastTextNode(element);
    if (textNode) {
        const range = document.createRange();
        range.setStart(textNode, textNode.length);
        range.collapse(true);

        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
    }

    element.focus();
}
