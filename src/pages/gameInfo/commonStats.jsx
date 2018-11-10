import React from "react";
import {CommonStatsCard} from "./commonStatsCard";
import {loadGameInfo} from "../../data/actions/gameInfo";
import {parseHeroBenchmarks} from "../../data/actions/heroInfo";
import {connect} from "react-redux";

class Component extends React.Component{

    render() {
        return (<div className="mainStats">
            <CommonStatsCard
                cardName={"XPM"}
                resultNumber={this.props.xpm}
                target={this.props.bestValues.gameInfo && this.props.bestValues.gameInfo.benchmarks.xp_per_min.raw.toFixed(2)}

            />
            <CommonStatsCard
                cardName={"GPM"}
                resultNumber={this.props.gpm}
                target={this.props.bestValues.gameInfo && this.props.bestValues.gameInfo.benchmarks.gold_per_min.raw.toFixed(2)}
            />
            <CommonStatsCard
                cardName={"KDA"}
                resultNumber={this.props.kda}
                target={this.props.bestValues.gameInfo && this.props.bestValues.gameInfo.kda.toFixed(2)}
            />
            <CommonStatsCard
                cardName={"Creeps"}
                resultNumber={this.props.creeps}
                target={this.props.bestValues.gameInfo && this.props.bestValues.gameInfo.benchmarks.last_hits_per_min.raw.toFixed(2)}
                isLastCard={true}
            />
        </div>);
    }

    componentDidMount() {
        this.props.findBestValues(this.props.heroId);
    }
}

const mapStateToProps = (state, ownProps) => ({
    bestValues: state.heroBenchmarks
});

const mapDispatchToProps = (dispatch) => ({
    findBestValues: (heroId) => parseHeroBenchmarks(dispatch, heroId)
});

export const CommonStats = connect(mapStateToProps, mapDispatchToProps)(Component);