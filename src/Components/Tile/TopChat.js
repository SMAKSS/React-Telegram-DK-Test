import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import ChatTile from './ChatTile';
import { getChatShortTitle } from '../../Utils/Chat';
import './TopChat.css';

class TopChat extends React.PureComponent {
    render() {
        const { chatId, onSelect, showSavedMessages, t } = this.props;

        const shortTitle = getChatShortTitle(chatId, showSavedMessages, t);

        return (
            <div className='top-chat'>
                <ChatTile chatId={chatId} onSelect={onSelect} showSavedMessages={showSavedMessages} showOnline />
                <div className='top-chat-title'>{shortTitle}</div>
            </div>
        );
    }
}

TopChat.propTypes = {
    chatId: PropTypes.number.isRequired,
    onSelect: PropTypes.func,
    showSavedMessages: PropTypes.bool
};

TopChat.defaultProps = {
    showSavedMessages: true
};

export default withTranslation()(TopChat);
