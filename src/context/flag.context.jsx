import { createContext, useEffect, useState } from "react";


// utils > constants 
const POLL_TIME = 5000; // every 5 second
const DEFAULT_OPTIONS = {
    url: 'https://api.jsonbin.io/v3/b/64b578cf8e4aa6225ebfaba8/latest',
    // method: 'GET',
    headers: {
        'X-MASTER-KEY': '$2b$10$9EDN/QO1b./coUnLQbg.IOWFPJB8ybfQdcHpiXaWbbBxvj2t4FAUu'
    }
}

//api > gedata
async function getData(url = "", headers) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'GET',
        // headers: { ...headers }
        headers: {
            'X-MASTER-KEY': '$2b$10$9EDN/QO1b./coUnLQbg.IOWFPJB8ybfQdcHpiXaWbbBxvj2t4FAUu'
        }
    });
    return response.json(); // parses JSON response into native JavaScript objects
}

export const FlagContext = createContext({});

export const FlagProvider = ({ children }) => {

    const [flags, setFlags] = useState({});

    // utils > timeer
    const fetchFeatureFlags = async () => {
        try {
            const { url, ...requestOptions } = DEFAULT_OPTIONS;

            const { record, metadata } = await getData(url, requestOptions);
            console.log("🚀 ~ file: flag.context.jsx:22 ~ fetchFeatureFlags ~ flags:", record);
            if (record && typeof record === 'object' && Object.keys(record).length) {
                setFlags({ ...record });
            }
        } catch (e) {
            console.log("🚀 ~ file: flag.context.jsx:40 ~ fetchFeatureFlags ~ e:", e);
            setFlags(null);
        }
    }

    // utils > timeer
    const pollFeatureflags = (pollTime) => {
        setInterval(async () => { await fetchFeatureFlags() }, pollTime)
        // setTimeout(async () => { await fetchFeatureFlags(options) }, pollTime)
    }

    useEffect(() => {
        fetchFeatureFlags();
        pollFeatureflags(POLL_TIME);
    }, []);

    const value = { flags };
    console.log('render......');
    return (
        <FlagContext.Provider value={value}>{children}</FlagContext.Provider>
    );
}

