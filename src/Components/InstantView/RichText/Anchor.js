import React from 'react';
import PropTypes from 'prop-types';
import RichText from './RichText';

function Anchor(props) {
    return (
        // eslint-disable-next-line
        <a id={props.name}>
            <RichText text={props.text} />
        </a>
    );
}

Anchor.propTypes = {
    name: PropTypes.string.isRequired,
    text: PropTypes.object.isRequired
};

export default Anchor;
