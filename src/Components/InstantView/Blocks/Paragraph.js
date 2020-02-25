import React from 'react';
import PropTypes from 'prop-types';
import RichText from '../RichText/RichText';

function Paragraph(props) {
    return (
        <p>
            <RichText text={props.text} />
        </p>
    );
}

Paragraph.propTypes = {
    text: PropTypes.object.isRequired
};

export default Paragraph;
