import React from 'react';
import { withTranslation } from 'react-i18next';
import Button from '@material-ui/core/Button';
import AppStore from '../../Stores/ApplicationStore';
import './UpdatePanel.css';

class UpdatePanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            newContentAvailable: false
        };
    }

    componentDidMount() {
        AppStore.on('clientUpdateNewContentAvailable', this.onClientUpdateNewContentAvailable);
    }

    componentWillUnmount() {
        AppStore.off('clientUpdateNewContentAvailable', this.onClientUpdateNewContentAvailable);
    }

    onClientUpdateNewContentAvailable = () => {
        this.setState({ newContentAvailable: true });
    };

    handleUpdate = () => {
        if (this.handled) return;

        this.handled = true;
        setTimeout(() => {
            window.location.reload();
        }, 250);
    };

    render() {
        const { newContentAvailable } = this.state;
        const { t } = this.props;

        if (!newContentAvailable) {
            return null;
        }

        return (
            <Button className='update-button' variant='contained' color='primary' onClick={this.handleUpdate}>
                {t('Update')}
            </Button>
        );
    }
}

export default withTranslation()(UpdatePanel);
