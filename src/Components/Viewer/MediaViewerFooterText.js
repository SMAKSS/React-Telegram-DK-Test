import React from 'react';
import PropTypes from 'prop-types';
import './MediaViewerFooterText.css';

class MediaViewerFooterText extends React.Component {
    render() {
        const { title, subtitle, style } = this.props;

        return (
            <div className='media-viewer-footer-text' style={style}>
                <div className='media-viewer-footer-text-wrapper'>
                    <span>{title}</span>
                    {Boolean(subtitle) && (
                        <span>
                            &nbsp;
                            {subtitle}
                        </span>
                    )}
                </div>
            </div>
        );
    }
}

MediaViewerFooterText.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string
};

export default MediaViewerFooterText;
