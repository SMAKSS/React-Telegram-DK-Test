import React from 'react';
import PropTypes from 'prop-types';
import RichText from './RichText';

function Texts(props) {
    return (
        <>
            {props.texts.map((x, index) => (
                <RichText key={index} text={x} />
            ))}
        </>
    );
}

Texts.propTypes = {
    texts: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Texts;
