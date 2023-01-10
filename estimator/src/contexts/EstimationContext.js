import React from "react";

const defaultEstimation = {
    "technical-design": 0,
    "database": 0,
    "api": 0,
    "business-logic": 0,
    "client": 0,
    "documentation": 0,
    "testing": 0
}

export const EstimationContext = React.createContext({
    globalEstimation: defaultEstimation,
    setTopicEstimation: () => {}
});

export const EstimationContextProvider = (props) => {

    const setTopicEstimation = (topic, score) => {

        const localEstimation = {...estimation};
        localEstimation[topic] = score;
        setEstimation(localEstimation);
    }

    const [estimation, setEstimation] = React.useState(defaultEstimation);

    return (
        <EstimationContext.Provider value={{globalEstimation: estimation, setTopicEstimation}}>
            {props.children}
        </EstimationContext.Provider>
    )
}

export default EstimationContext;
