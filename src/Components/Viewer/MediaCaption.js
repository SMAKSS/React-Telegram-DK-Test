import React from 'react';
import PropTypes from 'prop-types';
import './MediaCaption.css';

class MediaCaption extends React.Component {
    handleClick = event => {
        event.stopPropagation();
    };

    render() {
        const { text } = this.props;

        return (
            <div className='media-caption' onClick={this.handleClick}>
                <div className='media-caption-text'>{text}</div>
            </div>
        );
    }
}

MediaCaption.propTypes = {
    text: PropTypes.object
};

MediaCaption.defaultProps = {};

export default MediaCaption;
