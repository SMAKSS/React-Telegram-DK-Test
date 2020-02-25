import React from 'react';
import PropTypes from 'prop-types';
import RichText from './RichText';

function Underline(props) {
    return (
        <ins>
            <RichText text={props.text} />
        </ins>
    );
}

Underline.propTypes = {
    text: PropTypes.object.isRequired
};

export default Underline;
