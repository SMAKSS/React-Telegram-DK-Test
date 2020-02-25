import EventEmitter from './EventEmitter';
import TdLibController from '../Controllers/TdLibController';

class InstantViewStore extends EventEmitter {
    constructor() {
        super();

        this.reset();

        this.addTdLibListener();
    }

    reset = () => {
        this.items = [];
    };

    onUpdate = update => {
        switch (update['@type']) {
            case 'updateAuthorizationState': {
                const { authorization_state } = update;
                if (!authorization_state) break;

                if (authorization_state['@type'] === 'authorizationStateClosed') {
                    this.reset();
                }

                break;
            }
            default:
                break;
        }
    };

    onClientUpdate = update => {
        switch (update['@type']) {
            case 'clientUpdateBlocksInView': {
                this.emit('clientUpdateBlocksInView', update);
                break;
            }
            case 'clientUpdateInstantViewContent': {
                const { content } = update;

                if (content) {
                    this.items.push(content.instantView);
                } else {
                    this.items = [];
                }

                this.emit('clientUpdateInstantViewContent', update);

                break;
            }
            case 'clientUpdateInstantViewUrl': {
                this.emit('clientUpdateInstantViewUrl', update);
                break;
            }
            case 'clientUpdateInstantViewViewerContent': {
                const { content } = update;

                this.viewerContent = content;

                this.emit('clientUpdateInstantViewViewerContent', update);
                break;
            }
            case 'clientUpdatePrevInstantView': {
                if (this.items.length <= 1) return;

                this.items.pop();
                const prevInstantView = this.items.pop();

                TdLibController.clientUpdate({
                    '@type': 'clientUpdateInstantViewContent',
                    content: {
                        instantView: prevInstantView
                    }
                });

                break;
            }
            default:
                break;
        }
    };

    addTdLibListener = () => {
        TdLibController.on('update', this.onUpdate);
        TdLibController.on('clientUpdate', this.onClientUpdate);
    };

    removeTdLibListener = () => {
        TdLibController.off('update', this.onUpdate);
        TdLibController.off('clientUpdate', this.onClientUpdate);
    };

    hasPrev() {
        return this.items.length > 1;
    }

    getCurrent() {
        return this.items.length > 0 ? this.items[this.items.length - 1] : null;
    }
}

const store = new InstantViewStore();
window.instantView = store;
export default store;
