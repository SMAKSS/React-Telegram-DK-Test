import React from 'react';
import PropTypes from 'prop-types';
import RichText from '../RichText/RichText';

function Title(props) {
    return (
        <h1>
            <RichText text={props.title} />
        </h1>
    );
}

Title.propTypes = {
    title: PropTypes.object.isRequired
};

export default Title;
