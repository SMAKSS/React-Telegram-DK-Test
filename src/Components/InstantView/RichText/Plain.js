import React from 'react';
import PropTypes from 'prop-types';

function Plain(props) {
    return props.text;
}

Plain.propTypes = {
    text: PropTypes.string.isRequired
};

export default Plain;
