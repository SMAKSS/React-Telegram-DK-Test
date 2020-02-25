import React from 'react';
import PropTypes from 'prop-types';

function Anchor(props) {
    // eslint-disable-next-line
    return <a id={props.name} />;
}

Anchor.propTypes = {
    name: PropTypes.string.isRequired
};

export default Anchor;
