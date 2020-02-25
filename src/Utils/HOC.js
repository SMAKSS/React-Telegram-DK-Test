import React from 'react';

export function compose(...funcs) {
    return funcs.reduce(
        (a, b) => (...args) => a(b(...args)),
        arg => arg
    );
}

export function withSaveRef() {
    return Component => {
        return React.forwardRef((props, ref) => <Component {...props} forwardedRef={ref} />);
    };
}

export function withRestoreRef() {
    return Component => {
        return class extends React.Component {
            render() {
                const { forwardedRef, ...rest } = this.props;

                return <Component {...rest} ref={forwardedRef} />;
            }
        };
    };
}

export function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}
