import React from 'react';
import PropTypes from 'prop-types';
import { compose } from '../../Utils/HOC';
import { withTranslation } from 'react-i18next';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import './UpdateDraftDialog.css';

class UpdateDraftDialog extends React.Component {
    handleDone = () => {
        const { onConfirm } = this.props;
        onConfirm();
    };

    handleCancel = () => {
        const { onCancel } = this.props;
        onCancel();
    };

    render() {
        const { draft, t } = this.props;
        if (!draft) return null;

        return (
            <Dialog
                transitionDuration={0}
                open={true}
                onClose={this.handleCancel}
                aria-labelledby='delete-dialog-title'>
                <DialogTitle id='delete-dialog-title'>{t('Confirm')}</DialogTitle>
                <DialogContent>
                    <DialogContentText>{t('UpdateDraftConfirmation')}</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleCancel} color='primary'>
                        {t('Cancel')}
                    </Button>
                    <Button onClick={this.handleDone} color='primary'>
                        {t('Ok')}
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

UpdateDraftDialog.propTypes = {
    files: PropTypes.array.isRequired,
    onConfirm: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired
};

const enhance = compose(withTranslation());

export default enhance(UpdateDraftDialog);
