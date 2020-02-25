import React from 'react';
import PropTypes from 'prop-types';
import RichText from '../RichText/RichText';

function Footer(props) {
    return (
        <footer>
            <RichText text={props.footer} />
        </footer>
    );
}

Footer.propTypes = {
    footer: PropTypes.object.isRequired
};

export default Footer;
