import React from 'react';

export const ContextStore = React.createContext()
export const ProviderApp = ({ children }) => {
    const [sideBarState, setSideBarState] = React.useState(false);
    return (
        <ContextStore.Provider value={{ setSideBarState, sideBarState }} >
            {children}
        </ContextStore.Provider>
    );
};
