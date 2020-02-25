import React from 'react';
import PropTypes from 'prop-types';
import RichText from './RichText';

function Bold(props) {
    return (
        <b>
            <RichText text={props.text} />
        </b>
    );
}

Bold.propTypes = {
    text: PropTypes.object.isRequired
};

export default Bold;
