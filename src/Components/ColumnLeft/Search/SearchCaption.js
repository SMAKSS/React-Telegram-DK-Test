import React from 'react';
import PropTypes from 'prop-types';
import './SearchCaption.css';

function SearchCaption(props) {
    const { caption, command, onClick } = props;

    return (
        <div className='search-caption'>
            <div className='search-caption-title'>{caption}</div>
            {Boolean(command) && (
                <a href='/#' onClick={onClick}>
                    {command}
                </a>
            )}
        </div>
    );
}

SearchCaption.propTypes = {
    caption: PropTypes.string.isRequired,
    command: PropTypes.string,
    onClick: PropTypes.func
};

export default SearchCaption;
