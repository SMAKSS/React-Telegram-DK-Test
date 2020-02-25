import React from 'react';
import { getDurationString } from '../../Utils/Common';
import PlayerStore from '../../Stores/PlayerStore';

class Time extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentTime: 0,
            duration: 0,
            timeString: this.getTimeString(0, 0)
        };
    }

    componentDidMount() {
        PlayerStore.on('clientUpdateMediaTime', this.onClientUpdateMediaTime);
    }

    componentWillUnmount() {
        PlayerStore.off('clientUpdateMediaTime', this.onClientUpdateMediaTime);
    }

    onClientUpdateMediaTime = update => {
        const { currentTime } = update;

        this.setState({
            currentTime: currentTime,
            currentTimeString: getDurationString(Math.floor(currentTime || 0))
        });
    };

    getTimeString = currentTime => {
        return getDurationString(Math.floor(currentTime || 0));
    };

    render() {
        const { currentTimeString } = this.state;

        return <>{currentTimeString}</>;
    }
}

export default Time;
