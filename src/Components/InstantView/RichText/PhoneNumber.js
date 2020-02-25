import React from 'react';
import PropTypes from 'prop-types';
import RichText from './RichText';

function PhoneNumber(props) {
    return (
        <a href={`tel:${props.phoneNumber}`}>
            <RichText text={props.text} />
        </a>
    );
}

PhoneNumber.propTypes = {
    phoneNumber: PropTypes.string.isRequired,
    text: PropTypes.object.isRequired
};

export default PhoneNumber;
