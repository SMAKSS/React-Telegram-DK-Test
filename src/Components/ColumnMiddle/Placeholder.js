import React from 'react';
import { withTranslation } from 'react-i18next';
import AppStore from '../../Stores/ApplicationStore';
import './Placeholder.css';

class Placeholder extends React.Component {
    constructor(props) {
        super(props);

        const { chatId, dialogsReady, cacheLoaded } = AppStore;
        this.state = {
            chatId,
            dialogsReady,
            cacheLoaded
        };
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (nextState.chatId !== this.state.chatId) {
            return true;
        }

        if (nextState.dialogsReady !== this.state.dialogsReady) {
            return true;
        }

        return nextState.cacheLoaded !== this.state.cacheLoaded;
    }

    componentDidMount() {
        AppStore.on('clientUpdateChatId', this.onClientUpdateChatId);
        AppStore.on('clientUpdateDialogsReady', this.onClientUpdateDialogsReady);
        AppStore.on('clientUpdateCacheLoaded', this.onClientUpdateCacheLoaded);
    }

    componentWillUnmount() {
        AppStore.off('clientUpdateChatId', this.onClientUpdateChatId);
        AppStore.off('clientUpdateDialogsReady', this.onClientUpdateDialogsReady);
        AppStore.off('clientUpdateCacheLoaded', this.onClientUpdateCacheLoaded);
    }

    onClientUpdateCacheLoaded = () => {
        const { cacheLoaded } = AppStore;

        this.setState({ cacheLoaded });
    };

    onClientUpdateChatId = update => {
        const { nextChatId: chatId } = update;

        this.setState({ chatId });
    };

    onClientUpdateDialogsReady = () => {
        const { dialogsReady } = AppStore;

        this.setState({ dialogsReady });
    };

    render() {
        const { t } = this.props;
        const { chatId } = this.state;
        if (chatId) return null;

        return (
            <div className='placeholder'>
                <div className='placeholder-wrapper'>
                    <div className='placeholder-meta'>{t('SelectChatToStartMessaging')}</div>
                </div>
            </div>
        );
    }
}

export default withTranslation()(Placeholder);
