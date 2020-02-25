import React from 'react';
import PropTypes from 'prop-types';
import RichText from '../RichText/RichText';

function Kicker(props) {
    const { kicker } = props;
    return (
        <h6 className='kicker'>
            <RichText text={kicker} />
        </h6>
    );
}

Kicker.propTypes = {
    kicker: PropTypes.object.isRequired
};

export default Kicker;
