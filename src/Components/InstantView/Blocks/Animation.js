import React from 'react';
import PropTypes from 'prop-types';
import Caption from './Caption';
import MediaAnimation from '../../../Components/Message/Media/Animation';
import { IV_PHOTO_DISPLAY_SIZE } from '../../../Constants';

function Animation(props) {
    const { animation, block, caption, openMedia } = props;

    return (
        <figure>
            <MediaAnimation
                iv={true}
                pageBlock={block}
                animation={animation}
                displaySize={IV_PHOTO_DISPLAY_SIZE}
                openMedia={openMedia}
            />
            <Caption text={caption.text} credit={caption.credit} />
        </figure>
    );
}

Animation.propTypes = {
    block: PropTypes.object.isRequired,
    animation: PropTypes.object,
    caption: PropTypes.object.isRequired,
    needAutoplay: PropTypes.bool.isRequired,
    openMedia: PropTypes.func
};

export default Animation;
