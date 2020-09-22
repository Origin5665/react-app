import React from 'react';

export const ContextStore = React.createContext(null)
export const ProviderApp = (props) => {
    return (
        <ContextStore.Provider value={props.store}>
            {props.children}
        </ContextStore.Provider>

    )
}
