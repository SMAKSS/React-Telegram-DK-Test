import React from 'react';
import PropTypes from 'prop-types';
import RichText from '../RichText/RichText';

function Blockquote(props) {
    const { text, credit } = props;
    return (
        <blockquote>
            <RichText text={text} />
            {credit && (
                <cite>
                    <RichText text={credit} />
                </cite>
            )}
        </blockquote>
    );
}

Blockquote.propTypes = {
    text: PropTypes.object.isRequired,
    credit: PropTypes.object.isRequired
};

export default Blockquote;
