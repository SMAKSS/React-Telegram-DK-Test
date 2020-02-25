import React from 'react';
import { getDisplayName } from '../../Utils/HOC';

const IVContext = React.createContext(null);

export default IVContext;

export function withIV(Component) {
    class IVComponent extends React.Component {
        render() {
            return <IVContext.Consumer>{value => <Component iv={value} {...this.props} />}</IVContext.Consumer>;
        }
    }

    IVComponent.displayName = `WithIV(${getDisplayName(Component)})`;

    return IVComponent;
}
