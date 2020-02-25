import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import SharedMediaBase from './SharedMediaBase';
import './SharedDocuments.css';

class SharedDocuments extends SharedMediaBase {
    isValidContent(content) {
        return content && content['@type'] === 'messageDocument';
    }

    getSearchFilter() {
        return { '@type': 'searchMessagesFilterDocument' };
    }

    getHeader() {
        const { t } = this.props;

        return t('DocumentsTitle');
    }
}

SharedDocuments.propTypes = {
    chatId: PropTypes.number.isRequired,
    migratedChatId: PropTypes.number,
    onClose: PropTypes.func.isRequired,
    popup: PropTypes.bool,
    minHeight: PropTypes.number
};

SharedDocuments.defaultProps = {
    popup: false,
    minHeight: 0
};

export default withTranslation()(SharedDocuments);
