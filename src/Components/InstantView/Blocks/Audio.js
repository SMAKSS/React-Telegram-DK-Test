import React from 'react';
import PropTypes from 'prop-types';
import MediaAudio from '../../Message/Media/Audio';
import { PHOTO_DISPLAY_SIZE } from '../../../Constants';
import Caption from './Caption';

function Audio(props) {
    const { audio, caption, openMedia } = props;

    return (
        <figure>
            <MediaAudio audio={audio} displaySize={PHOTO_DISPLAY_SIZE} openMedia={openMedia} />
            <Caption text={caption.text} credit={caption.credit} />
        </figure>
    );
}

Audio.propTypes = {
    audio: PropTypes.object,
    caption: PropTypes.object.isRequired,
    openMedia: PropTypes.func
};

export default Audio;
