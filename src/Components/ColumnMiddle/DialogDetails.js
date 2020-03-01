import React, { Component } from 'react';
import classNames from 'classnames';
import ChatInfoDialog from '../Popup/ChatInfoDialog';
import Footer from './Footer';
import Header from './Header';
import HeaderPlayer from '../Player/HeaderPlayer';
import MessagesList from './MessagesList';
import StickerSetDialog from '../Popup/StickerSetDialog';
import AppStore from '../../Stores/ApplicationStore';
import './DialogDetails.css';

class DialogDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            chatId: AppStore.getChatId(),
            messageId: AppStore.getMessageId(),
            selectedCount: 0
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        const { chatId, messageId, selectedCount } = this.state;
        if (nextState.chatId !== chatId) {
            return true;
        }
        if (nextState.messageId !== messageId) {
            return true;
        }
        if (nextState.selectedCount !== selectedCount) {
            return true;
        }

        return false;
    }

    componentDidMount() {
        AppStore.on('clientUpdateChatDetailsVisibility', this.onUpdateChatDetailsVisibility);
        AppStore.on('clientUpdateChatId', this.onClientUpdateChatId);
    }

    componentWillUnmount() {
        AppStore.off('clientUpdateChatDetailsVisibility', this.onUpdateChatDetailsVisibility);
        AppStore.off('clientUpdateChatId', this.onClientUpdateChatId);
    }

    onUpdateChatDetailsVisibility = update => {
        this.forceUpdate();
    };

    onClientUpdateChatId = update => {
        this.setState({
            chatId: update.nextChatId,
            messageId: update.nextMessageId
        });
    };

    scrollToBottom = () => {
        this.messagesList.scrollToBottom();
    };

    scrollToStart = () => {
        this.messagesList.scrollToStart();
    };

    scrollToMessage = () => {
        this.messagesList.scrollToMessage();
    };

    render() {
        const { chatId, messageId } = this.state;
        const { isChatDetailsVisible } = AppStore;

        return (
            <div className={classNames('dialog-details', { 'dialog-details-third-column': isChatDetailsVisible })}>
                <HeaderPlayer />
                <Header chatId={chatId} />
                <MessagesList ref={ref => (this.messagesList = ref)} chatId={chatId} messageId={messageId} />
                <Footer chatId={chatId} />
                <StickerSetDialog />
                <ChatInfoDialog />
                {/*<Footer />*/}
            </div>
        );
    }
}

export default DialogDetails;
