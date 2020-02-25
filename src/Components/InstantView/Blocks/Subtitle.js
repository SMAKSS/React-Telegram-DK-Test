import React from 'react';
import PropTypes from 'prop-types';
import RichText from '../RichText/RichText';

function Subtitle(props) {
    return (
        <h2>
            <RichText text={props.subtitle} />
        </h2>
    );
}

Subtitle.propTypes = {
    subtitle: PropTypes.object.isRequired
};

export default Subtitle;
