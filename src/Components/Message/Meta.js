import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withTranslation } from 'react-i18next';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Status from './Status';
import { getDate, getDateHint } from '../../Utils/Message';
import MessageStore from '../../Stores/MessageStore';
import './Meta.css';

class Meta extends React.Component {
    render() {
        const { className, chatId, messageId, date, editDate, onDateClick, t, views, style } = this.props;

        const message = MessageStore.get(chatId, messageId);
        if (!message) return null;

        const { is_outgoing } = message;

        const dateStr = getDate(date);
        const dateHintStr = getDateHint(date);

        return (
            <div className={classNames('meta', className)} style={style}>
                <span>&ensp;</span>
                {views > 0 && (
                    <>
                        <VisibilityIcon className='meta-views-icon' />
                        <span className='meta-views'>
                            &nbsp;
                            {views}
                            &nbsp; &nbsp;
                        </span>
                    </>
                )}
                {editDate > 0 && <span>{t('EditedMessage')}&nbsp;</span>}
                <a href='#/' onClick={onDateClick}>
                    <span title={dateHintStr}>{dateStr}</span>
                </a>
                {is_outgoing && <Status chatId={chatId} messageId={messageId} />}
            </div>
        );
    }
}

Meta.propTypes = {
    chatId: PropTypes.number.isRequired,
    messageId: PropTypes.number.isRequired,
    views: PropTypes.number,
    date: PropTypes.number.isRequired,
    editDate: PropTypes.number,
    onDateClick: PropTypes.func
};

export default withTranslation()(Meta);
