import React from 'react';
import PropTypes from 'prop-types';
import RichText from '../RichText/RichText';

function PullQuote(props) {
    const { text, credit } = props;
    return (
        <aside>
            <RichText text={text} />
            {credit && (
                <cite>
                    <RichText text={credit} />
                </cite>
            )}
        </aside>
    );
}

PullQuote.propTypes = {
    text: PropTypes.object.isRequired,
    credit: PropTypes.object.isRequired
};

PullQuote.propTypes = {};

export default PullQuote;
