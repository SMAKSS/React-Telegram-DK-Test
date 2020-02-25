import React from 'react';
import PropTypes from 'prop-types';
import RichText from './RichText';

function Subscript(props) {
    return (
        <sub>
            <RichText text={props.text} />
        </sub>
    );
}

Subscript.propTypes = {
    text: PropTypes.object.isRequired
};

export default Subscript;
