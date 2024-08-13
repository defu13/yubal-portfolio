import { createContext, useContext, useState } from "react";

export const LoadingContext = createContext();

export const  LoadingProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);

    const LoadingContextValues = {
        loading,
        setLoading
    }
    return (
        <LoadingContext.Provider value={LoadingContextValues}>
            {children}
        </LoadingContext.Provider>
    )
}

export const useLoading = () => {
    const context = useContext(LoadingContext);
    return context;
};