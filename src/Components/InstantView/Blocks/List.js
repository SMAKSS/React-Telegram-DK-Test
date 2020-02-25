import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

function List(props) {
    return (
        <ul>
            {props.items.map((x, index) => (
                <ListItem key={index} label={x.label} pageBlocks={x.page_blocks} />
            ))}
        </ul>
    );
}

List.propTypes = {
    items: PropTypes.array.isRequired
};

export default List;
