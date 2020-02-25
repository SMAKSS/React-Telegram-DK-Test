import React from 'react';
import PropTypes from 'prop-types';
import RichText from './RichText';

function Fixed(props) {
    return (
        <code>
            <RichText text={props.text} />
        </code>
    );
}

Fixed.propTypes = {
    text: PropTypes.object.isRequired
};

export default Fixed;
