import {createContext, useEffect, useState} from "react";
import featureFlagsDataServiceCall from "../data";


export const FeatureFlagsContext = createContext(null)



export default function FeatureFlagGlobalState({children}) {

    const [loading, setLoading] = useState(false)
    const [enabledFlags, setEnabledFlags] = useState({})

    const fetchFeatureFlags = async () => {
        try {
            setLoading(true)
            const response = await featureFlagsDataServiceCall();
            console.log('response', response)
            setEnabledFlags(response)
            setLoading(false)

        } catch(error) {
            console.error(error)
            setLoading(false)
            throw new Error(error)
        }
    }

    useEffect(() => {
        fetchFeatureFlags();
    }, [])

    return <FeatureFlagsContext.Provider value={{ loading, enabledFlags }}>
        {children}
    </FeatureFlagsContext.Provider>
}