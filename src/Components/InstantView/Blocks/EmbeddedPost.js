import React from 'react';
import PropTypes from 'prop-types';
import { withIV } from '../IVContext';
import Caption from './Caption';
import { getPageBlock } from '../../../Utils/InstantView';
import AuthorDate from './AuthorDate';

function EmbeddedPost(props) {
    const { author, date, pageBlocks, caption, iv } = props;

    return (
        <blockquote>
            <figure>
                {Boolean(author) && <h3>{author}</h3>}
                <AuthorDate author={null} publishDate={date} />
                {pageBlocks.map((x, index) => getPageBlock(x, iv, index))}
                <Caption text={caption.text} credit={caption.credit} />
            </figure>
        </blockquote>
    );
}

EmbeddedPost.propTypes = {
    url: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    authorPhoto: PropTypes.object,
    date: PropTypes.number.isRequired,
    pageBlocks: PropTypes.array.isRequired,
    caption: PropTypes.object.isRequired
};

export default withIV(EmbeddedPost);
