import React from 'react';
import PropTypes from 'prop-types';
import RichText from './RichText';

function Superscript(props) {
    return (
        <sup>
            <RichText text={props.text} />
        </sup>
    );
}

Superscript.propTypes = {
    text: PropTypes.object.isRequired
};

export default Superscript;
