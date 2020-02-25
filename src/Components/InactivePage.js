import React from 'react';
import AppInactive from './Additional/AppInactive';
import Footer from './Footer';

class InactivePage extends React.Component {
    render() {
        return (
            <>
                <div className='header-wrapper' />
                <div className='page'>
                    <AppInactive />
                </div>
                <Footer />
            </>
        );
    }
}

export default InactivePage;
