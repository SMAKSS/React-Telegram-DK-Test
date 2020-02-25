import React from 'react';
import PropTypes from 'prop-types';

function ChatLink(props) {
    return <div />;
}

ChatLink.propTypes = {
    title: PropTypes.string.isRequired,
    photo: PropTypes.object,
    username: PropTypes.string.isRequired
};

export default ChatLink;
