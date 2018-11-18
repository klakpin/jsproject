import React from "react"
import {CommonStats} from "./commonStats";
import {ItemTimings} from "./itemTimings";



export const GameInfo = () => (
    <main className="content">
        <div className="gameInfo">

            <CommonStats/>
            <ItemTimings/>
        </div>
    </main>
);