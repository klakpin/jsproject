import React from "react";
import Paper from "@material-ui/core/Paper/Paper";

import itemImg from "../../assets/img/bkb.jpg";


export class ItemTimings extends React.Component {

    render() {
        return (
            <Paper className="heroInfoCard">
                <TimingWithItem itemSrc="" actualTiming={"Твой тайминг"} idealTiming={"Идеальный тайминг"}/>
                <TimingWithItem itemSrc={itemImg} actual    Timing={"23:23"} idealTiming={"20:59"}/>
                <TimingWithItem itemSrc={itemImg} actualTiming={"23:23"} idealTiming={"20:59"}/>
                <TimingWithItem itemSrc={itemImg} actualTiming={"23:23"} idealTiming={"20:59"}/>
                <TimingWithItem itemSrc={itemImg} actualTiming={"23:23"} idealTiming={"20:59"}/>
                <TimingWithItem itemSrc={itemImg} actualTiming={"23:23"} idealTiming={"20:59"}/>
                <TimingWithItem itemSrc={itemImg} actualTiming={"23:23"} idealTiming={"20:59"}/>
            </Paper>
        )
    }
}

function TimingWithItem(props) {
    /** @namespace props.itemSrc */
    return (
        <div className="itemTiming">
            <img src={props.itemSrc} alt="" className="itemTiming-itemImg"/>
            <div className="itemTiming-time">{props.actualTiming}</div>
            <div className="itemTiming-time">{props.idealTiming}</div>
        </div>
    );
}