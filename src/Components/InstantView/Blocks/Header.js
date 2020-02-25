import React from 'react';
import PropTypes from 'prop-types';
import RichText from '../RichText/RichText';

function Header(props) {
    return (
        <h3>
            <RichText text={props.header} />
        </h3>
    );
}

Header.propTypes = {
    header: PropTypes.object.isRequired
};

export default Header;
