import React from 'react';
import PropTypes from 'prop-types';
import Caption from './Caption';
import Location from '../../Message/Media/Location';
import { IV_LOCATION_HEIGHT, IV_LOCATION_WIDTH } from '../../../Constants';

function Map(props) {
    const { location, caption } = props;

    return (
        <figure>
            <Location width={IV_LOCATION_WIDTH} height={IV_LOCATION_HEIGHT} location={location} />
            <Caption text={caption.text} credit={caption.credit} />
        </figure>
    );
}

Map.propTypes = {
    location: PropTypes.object.isRequired,
    zoom: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    caption: PropTypes.object.isRequired
};

export default Map;
