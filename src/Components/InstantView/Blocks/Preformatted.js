import React from 'react';
import PropTypes from 'prop-types';
import RichText from '../RichText/RichText';

function Preformatted(props) {
    return (
        <pre>
            <RichText text={props.text} />
        </pre>
    );
}

Preformatted.propTypes = {
    text: PropTypes.object.isRequired,
    language: PropTypes.string.isRequired
};

export default Preformatted;
