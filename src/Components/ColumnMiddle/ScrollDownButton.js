import React from 'react';
import PropTypes from 'prop-types';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import IconButton from '@material-ui/core/IconButton';
import './ScrollDownButton.css';

class ScrollDownButton extends React.Component {
    render() {
        const { onClick } = this.props;

        return (
            <div className='scroll-down-button'>
                <IconButton disableRipple={true} onMouseDown={onClick}>
                    <ArrowDownwardIcon />
                </IconButton>
            </div>
        );
    }
}

ScrollDownButton.propTypes = {
    onClick: PropTypes.func.isRequired
};

export default ScrollDownButton;
