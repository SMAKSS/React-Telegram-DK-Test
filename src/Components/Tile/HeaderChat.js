import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ChatTile from './ChatTile';
import DialogTitle from './DialogTitle';
import HeaderChatSubtitle from './HeaderChatSubtitle';
import './HeaderChat.css';

class HeaderChat extends React.Component {
    render() {
        const { className, chatId, onClick } = this.props;

        return (
            <div className={classNames('header-chat', className)} onClick={onClick}>
                <ChatTile chatId={chatId} size={44} />
                <div className='header-chat-content'>
                    <DialogTitle chatId={chatId} />
                    <HeaderChatSubtitle chatId={chatId} />
                </div>
            </div>
        );
    }
}

HeaderChat.propTypes = {
    chatId: PropTypes.number.isRequired
};

export default HeaderChat;
