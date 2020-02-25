import React from 'react';
import PropTypes from 'prop-types';
import './UserPlaceholder.css';

class UserPlaceholder extends React.Component {
    render() {
        const { index, showStatus } = this.props;

        const titleWidth = `${20 + Math.sin(index) * 10}%`;
        const contentWidth = `${30 + Math.cos(index) * 10}%`;

        return (
            <div className='user-placeholder'>
                <div className='user-wrapper'>
                    <div className='user-placeholder-tile' />
                    <div className='user-placeholder-inner-wrapper'>
                        <div className='tile-first-row'>
                            <div className='dialog-placeholder-title' style={{ width: titleWidth }} />
                            <div className='dialog-placeholder-title' style={{ width: contentWidth, marginLeft: 8 }} />
                        </div>
                        {showStatus && (
                            <div className='tile-second-row'>
                                <div className='dialog-placeholder-content' style={{ width: contentWidth }} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

UserPlaceholder.propTypes = {
    index: PropTypes.number.isRequired,
    showStatus: PropTypes.bool
};

UserPlaceholder.defaultProps = {
    showStatus: true
};

export default UserPlaceholder;
