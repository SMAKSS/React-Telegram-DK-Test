import React from 'react';
import './ErrorHandler.css';

class ErrorHandler extends React.Component {
    state = {
        error: null,
        errorInfo: null
    };

    componentDidCatch(error, errorInfo) {
        this.setState({ error, errorInfo });
    }

    render() {
        const { children } = this.props;
        const { error, errorInfo } = this.state;
        if (error || errorInfo) {
            return (
                <div className='error-handler'>
                    <span>
                        <pre>
                            {`${error.name}: ${error.message}`}
                            {errorInfo.componentStack}
                        </pre>
                    </span>
                </div>
            );
        }

        return children;
    }
}

export default ErrorHandler;
