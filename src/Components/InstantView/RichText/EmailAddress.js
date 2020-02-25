import React from 'react';
import PropTypes from 'prop-types';
import RichText from './RichText';

function EmailAddress(props) {
    return (
        <a href={`mailto:${props.emailAddress}`}>
            <RichText text={props.text} />
        </a>
    );
}

EmailAddress.propTypes = {
    emailAddress: PropTypes.string.isRequired,
    text: PropTypes.object.isRequired
};

export default EmailAddress;
