import React from "react";

const userContext = React.createContext();

const UCProvider = userContext.Provider
const UCConsumer = userContext.Consumer

export {UCProvider, UCConsumer}
