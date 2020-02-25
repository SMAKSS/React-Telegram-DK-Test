import React from 'react';
import PropTypes from 'prop-types';
import RichText from './RichText';

function Italic(props) {
    return (
        <i>
            <RichText text={props.text} />
        </i>
    );
}

Italic.propTypes = {
    text: PropTypes.object.isRequired
};

export default Italic;
