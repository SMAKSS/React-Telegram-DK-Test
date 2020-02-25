import React from 'react';
import PropTypes from 'prop-types';
import RichText from './RichText';

function Strikethrough(props) {
    return (
        <del>
            <RichText text={props.text} />
        </del>
    );
}

Strikethrough.propTypes = {
    text: PropTypes.object.isRequired
};

export default Strikethrough;
