import React from 'react';
import Footer from './Footer';
import NativeApp from './Additional/NativeApp';

class NativeAppPage extends React.Component {
    render() {
        return (
            <>
                <div className='header-wrapper' />
                <div
                    className='page'
                    style={{
                        background: '#FFFFFF',
                        color: '#000000'
                    }}>
                    <NativeApp />
                </div>
                <Footer />
            </>
        );
    }
}

export default NativeAppPage;
