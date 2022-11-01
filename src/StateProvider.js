import React, { createContext, useContext, useReducer } from 'react'; //importing dependencies
export const StateContext = createContext(); //preparing the datalayer/react context api 


//higher order component
export const StateProvider = ({ reducer, initialState, children}) => (
    <StateContext.Provider value = {useReducer (reducer, initialState)}>
        {children}  
    </StateContext.Provider>
); //children is referring to <?App>


//hook which allows us to pull info from the data
export const useStateValue = () => useContext(StateContext);

