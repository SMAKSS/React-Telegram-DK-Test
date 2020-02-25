import React from 'react';
import PropTypes from 'prop-types';
import RichText from './RichText';

function Marked(props) {
    return (
        <mark>
            <RichText text={props.text} />
        </mark>
    );
}

Marked.propTypes = {
    text: PropTypes.object.isRequired
};

export default Marked;
