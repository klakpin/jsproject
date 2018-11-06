import React from "react";
import * as PropTypes from "prop-types";
import CounutUp from "countup.js";
import calcDigits from "@klakpin/digits-calc";
import Card from "@material-ui/core/Card/Card";
import CardContent from "@material-ui/core/CardContent/CardContent";

export class CommonStatsCard extends React.Component {

    constructor(props) {
        super(props);
        this.resultNumber = React.createRef();
    }
    render() {
        return (
            <Card className={"stats-card" + (this.props.isLastCard ? " stats-card-last" : "")}>
                <CardContent>
                <div ref={this.resultNumber} className="statsNumber">{this.props.resultNumber}</div>
                <div id="xpmTarget" className="statsNumberTarget">Цель: {this.props.target}</div>
                </CardContent>
                <CardContent>
                <div className="">
                    <div className="statsName">{this.props.cardName}</div>
                </div>
                </CardContent>
            </Card>
        );
    }

    componentDidMount() {
        const options = {
            useEasing: true,
            useGrouping: true,
            separator: ',',
            decimal: '.',
        };

        let counter = new CounutUp(this.resultNumber.current, 0, this.props.resultNumber, calcDigits(this.props.resultNumber), 1.5, options);
        if (!counter.error) {
            counter.start();
        } else {
            console.error(counter.error);
        }
    }
}

CommonStatsCard.propTypes = {
    cardName: PropTypes.string,
    resultNumber: PropTypes.number,
    target: PropTypes.number,
    isLastCard: PropTypes.bool
};