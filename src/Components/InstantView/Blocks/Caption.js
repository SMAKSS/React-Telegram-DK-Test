import React from 'react';
import PropTypes from 'prop-types';
import RichText from '../RichText/RichText';
import { isEmptyText } from '../../../Utils/InstantView';

function Caption(props) {
    const { text, credit } = props;

    const hasText = !isEmptyText(text);
    const hastCredit = !isEmptyText(credit);
    if (!hasText && !hastCredit) return null;

    return (
        <figcaption>
            {hasText && <RichText text={text} />}
            {hastCredit && (
                <cite>
                    <RichText text={credit} />
                </cite>
            )}
        </figcaption>
    );
}

Caption.propTypes = {
    text: PropTypes.object.isRequired,
    credit: PropTypes.object.isRequired
};

export default Caption;
