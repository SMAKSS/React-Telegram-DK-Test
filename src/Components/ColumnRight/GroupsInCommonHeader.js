import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import './GroupsInCommonHeader.css';

class GroupsInCommonHeader extends React.Component {
    render() {
        const { onClose } = this.props;

        return (
            <div className='header-master'>
                <IconButton className='header-left-button' onClick={onClose}>
                    <ArrowBackIcon />
                </IconButton>
                <div className='header-status grow cursor-pointer'>
                    <span className='header-status-content'>Groups in common</span>
                </div>
            </div>
        );
    }
}

GroupsInCommonHeader.propTypes = {
    onClose: PropTypes.func.isRequired
};

export default GroupsInCommonHeader;
