import React from 'react';
import { withTranslation } from 'react-i18next';
import './UnreadSeparator.css';

function UnreadSeparator(props) {
    const { t } = props;

    return <div className='unread-separator'>{t('UnreadMessages')}</div>;
}

export default withTranslation()(UnreadSeparator);
