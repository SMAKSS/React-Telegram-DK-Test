import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';

import { openUser } from '../../Actions/Client';
import User from '../Tile/User';
import TdLibController from '../../Controllers/TdLibController';
import './Contacts.css';

class Contacts extends React.Component {
    state = {
        length: 0,
        text: '',
        searchItems: []
    };

    handleClose = () => {
        TdLibController.clientUpdate({
            '@type': 'clientUpdateCloseContacts'
        });
    };

    render() {
        const { items, t } = this.props;

        const contacts = [];
        for (let i = 0; i < items.user_ids.length && i < 10000; i++) {
            const userId = items.user_ids[i];
            contacts.push(
                <ListItem key={userId} className='user-list-item' button>
                    <User onSelect={openUser} userId={userId} />
                </ListItem>
            );
        }

        return (
            <div className='contacts'>
                <div className='header-master'>
                    <IconButton className='header-left-button' onClick={this.handleClose}>
                        <ArrowBackIcon />
                    </IconButton>
                    <div className='header-status grow cursor-pointer'>
                        <span className='header-status-content'>{t('Contacts')}</span>
                    </div>
                </div>
                <div className='contacts-list'>{contacts}</div>
            </div>
        );
    }
}

Contacts.propTypes = {
    items: PropTypes.object.isRequired
};

export default withTranslation()(Contacts);
