import PropTypes from 'prop-types';
import { withIV } from '../IVContext';
import { getPageBlock } from '../../../Utils/InstantView';

function Cover(props) {
    return getPageBlock(props.cover, props.iv);
}

Cover.propTypes = {
    cover: PropTypes.object.isRequired
};

export default withIV(Cover);
