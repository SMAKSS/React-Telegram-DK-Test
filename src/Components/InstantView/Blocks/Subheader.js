import React from 'react';
import PropTypes from 'prop-types';
import RichText from '../RichText/RichText';

function Subheader(props) {
    return (
        <h4>
            <RichText text={props.subheader} />
        </h4>
    );
}

Subheader.propTypes = {
    subheader: PropTypes.object.isRequired
};

export default Subheader;
