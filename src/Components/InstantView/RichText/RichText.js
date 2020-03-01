import PropTypes from 'prop-types';
import { getRichText } from '../../../Utils/InstantView';

function RichText(props) {
    return getRichText(props.text);
}

RichText.propTypes = {
    text: PropTypes.object.isRequired
};

export default RichText;
