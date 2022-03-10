import React from "react";

const TeamData = React.createContext();

const TeamDataProvider = TeamData.Provider;
const TeamDataConsumer = TeamData.Consumer;

export { TeamData, TeamDataProvider, TeamDataConsumer };
