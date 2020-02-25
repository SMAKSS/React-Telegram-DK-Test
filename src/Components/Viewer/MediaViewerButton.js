import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './MediaViewerButton.css';

class MediaViewerButton extends React.Component {
    handleClick = event => {
        event.stopPropagation();

        const { disabled, onClick } = this.props;

        if (disabled) return;

        onClick(event);
    };

    render() {
        const { disabled, grow, children, className, style } = this.props;

        const cx = classNames(
            disabled ? 'media-viewer-button-disabled' : 'media-viewer-button',
            { grow: grow },
            className
        );

        return (
            <div className={cx} style={style} onClick={this.handleClick}>
                {children}
            </div>
        );
    }
}

MediaViewerButton.propTypes = {
    disabled: PropTypes.bool,
    onClick: PropTypes.func
};

export default MediaViewerButton;
