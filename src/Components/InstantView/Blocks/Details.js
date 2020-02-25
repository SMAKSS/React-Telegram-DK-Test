import React from 'react';
import PropTypes from 'prop-types';
import { withIV } from '../IVContext';
import RichText from '../RichText/RichText';
import { getPageBlock } from '../../../Utils/InstantView';

function Details(props) {
    const { header, pageBlocks, isOpen, iv } = props;

    return (
        <details open={isOpen}>
            <summary>
                <RichText text={header} />
            </summary>
            {pageBlocks.map((x, index) => getPageBlock(x, iv, index))}
        </details>
    );
}

Details.propTypes = {
    header: PropTypes.object.isRequired,
    pageBlocks: PropTypes.array.isRequired,
    isOpen: PropTypes.bool.isRequired
};

export default withIV(Details);
