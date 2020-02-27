import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/es/Typography/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import './NotificationTimer.css';

class NotificationTimer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            seconds: this.props.timeout / 1000,
            value: 0
        };
    }

    componentDidMount() {
        this.startTime = new Date();
        this.expire = this.startTime;
        this.expire.setMilliseconds(this.expire.getMilliseconds() + this.props.timeout);
        this.timerId = setInterval(this.handleTimer, 100);
    }

    handleTimer = () => {
        const now = new Date();
        const seconds = this.expire - now;
        const value = 100 - (seconds / this.props.timeout) * 100;
        // console.log(`NotificationTimer ms=${seconds} value=${value}`);
        this.setState({
            seconds: seconds > 0 ? seconds : 0,
            value: value > 100 ? 100 : value
        });

        if (now >= this.expire) {
            if (this.timerId) {
                clearInterval(this.timerId);
                this.timerId = null;
            }
        }
    };

    componentWillUnmount() {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    render() {
        const { value, seconds } = this.state;

        return (
            <div className='notification-timer'>
                <div className='notification-timer-text'>
                    <Typography color='inherit'>{(seconds / 1000).toFixed()}</Typography>
                </div>
                <div className='notification-timer-progress'>
                    <CircularProgress size={32} value={100 - value} variant='static' />
                </div>
            </div>
        );
    }
}

NotificationTimer.propTypes = {
    timeout: PropTypes.number.isRequired
};

export default NotificationTimer;
