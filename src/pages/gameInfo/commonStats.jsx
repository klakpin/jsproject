import React from "react";
import {CommonStatsCard} from "./commonStatsCard";

export const CommonStats = () => (
    <div className="mainStats">
        <CommonStatsCard
            cardName={"XPM"}
            resultNumber={679}
            target={650}
        />
        <CommonStatsCard
            cardName={"GPM"}
            resultNumber={500}
            target={600}
        />
        <CommonStatsCard
            cardName={"KDA"}
            resultNumber={3.4}
            target={2.5}
        />
        <CommonStatsCard
            cardName={"Creeps"}
            resultNumber={367}
            target={300}
            isLastCard={true}
        />
    </div>
);