import { loadInstantViewContent } from '../Utils/File';
import { setInstantViewContent } from './Client';
import TdLibController from '../Controllers/TdLibController';

let timestamp = null;

export async function openInstantView(url) {
    try {
        const now = (timestamp = new Date());
        const result = await TdLibController.send({
            '@type': 'getWebPageInstantView',
            url,
            force_full: true
        });
        if (timestamp !== now) return;

        console.log('[IV] open', result);
        loadInstantViewContent(result);
        setInstantViewContent({ instantView: result });
    } catch {
        const newWindow = window.open();
        newWindow.opener = null;
        newWindow.location = url;
    }
}
