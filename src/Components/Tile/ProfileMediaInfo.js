import React from 'react';
import PropTypes from 'prop-types';
import ChatTile from './ChatTile';
import MessageAuthor from '../Message/MessageAuthor';
import './MediaInfo.css';

class ProfileMediaInfo extends React.Component {
    render() {
        const { chatId, date } = this.props;

        return (
            <div className='media-info'>
                <div className='media-info-wrapper'>
                    <ChatTile chatId={chatId} showSavedMessages={false} />
                    <div className='media-info-content'>
                        <div className='media-info-row'>
                            <MessageAuthor chatId={chatId} />
                        </div>
                        {date && (
                            <div className='media-info-row meta'>
                                <span>{date}</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

ProfileMediaInfo.propTypes = {
    chatId: PropTypes.number.isRequired,
    date: PropTypes.string
};

export default ProfileMediaInfo;
