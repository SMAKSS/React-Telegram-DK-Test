import React from 'react';
import PropTypes from 'prop-types';
import { withIV } from '../IVContext';
import RichText from '../RichText/RichText';
import { getPageBlock, isEmptyText } from '../../../Utils/InstantView';

function Table(props) {
    const { caption, cells, isBordered, isStriped, iv } = props;

    return (
        <table striped={isStriped ? '' : null} border={isBordered ? 1 : 0}>
            {!isEmptyText(caption) && (
                <caption>
                    <RichText text={caption} />
                </caption>
            )}
            <tbody>
                {cells.map((row, rowIndex) => {
                    return <tr key={rowIndex}>{row.map((x, index) => getPageBlock(x, iv, index))}</tr>;
                })}
            </tbody>
        </table>
    );
}

Table.propTypes = {
    caption: PropTypes.object.isRequired,
    cells: PropTypes.array.isRequired,
    isBordered: PropTypes.bool.isRequired,
    isStriped: PropTypes.bool.isRequired
};

export default withIV(Table);
