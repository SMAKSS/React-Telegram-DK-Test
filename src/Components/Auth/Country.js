import React from 'react';
import PropTypes from 'prop-types';
import './Country.css';

function Country({ emoji, name, phone }) {
    return (
        <div className='country'>
            <span className='country-emoji'>{emoji}</span>
            <span className='country-name'>{name}</span>
            <span className='country-phone'>{phone}</span>
        </div>
    );
}

Country.propTypes = {
    emoji: PropTypes.string,
    name: PropTypes.string,
    phone: PropTypes.string
};

export default Country;
