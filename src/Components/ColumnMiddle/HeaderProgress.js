import React from 'react';
import './HeaderProgress.css';

class HeaderProgress extends React.Component {
    render() {
        return (
            <>
                <span className='header-progress'>.</span>
                <span className='header-progress'>.</span>
                <span className='header-progress'>.</span>
            </>
        );
    }
}

export default HeaderProgress;
