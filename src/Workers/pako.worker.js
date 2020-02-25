/* eslint-disable */
import pako from 'pako';

self.addEventListener('message', ({ data: { key, blob } }) => {
    const reader = new FileReader();
    reader.onload = async e => {
        try {
            const result = pako.inflate(e.target.result, { to: 'string' });
            postMessage({ key, result: result });
        } catch (err) {
            postMessage({ key, error: true, msg: err.toString() });
        }
    };
    reader.readAsArrayBuffer(blob);
});
