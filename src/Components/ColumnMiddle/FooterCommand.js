import React from 'react';
import Button from '@material-ui/core/Button/Button';
import './FooterCommand.css';

class FooterCommand extends React.Component {
    render() {
        const { command, onCommand } = this.props;

        return (
            <div className='footer-command-wrapper'>
                <div className='footer-command-actions'>
                    <Button color='primary' className='footer-command-button' onClick={onCommand}>
                        {command}
                    </Button>
                </div>
            </div>
        );
    }
}

export default FooterCommand;
