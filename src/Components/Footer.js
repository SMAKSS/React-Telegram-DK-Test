import React from 'react';
import packageJson from '../../package.json';
import './Footer.css';

class Footer extends React.PureComponent {
    render() {
        return (
            <div className='footer-wrapper'>
                <span>{packageJson.version}</span>
            </div>
        );
    }
}

export default Footer;
