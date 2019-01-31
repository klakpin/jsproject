import React from "react"
import {CommonStats} from "./commonStats";
import {ItemTimings} from "./itemTimings";
import {connect} from "react-redux";
import {loadGameInfo} from "../../data/actions/gameInfo";
import {parseHeroBenchmarks} from "../../data/actions/heroInfo";


class Component extends React.Component {

    render() {
        return (
            <main className="content">
                <div className="gameInfo">
                    {this.props.game && <CommonStats
                        xpm={this.props.game.gameInfo.benchmarks.xp_per_min.raw.toFixed(2)}
                        gpm={this.props.game.gameInfo.benchmarks.gold_per_min.raw.toFixed(2)}
                        kda={this.props.game.gameInfo.kda.toFixed(2)}
                        creeps={this.props.game.gameInfo.benchmarks.last_hits_per_min.raw.toFixed(2)}
                        matchId={this.props.game.match_id}
                        heroId={this.props.game.gameInfo.hero_id}
                    />}
                    {/*<ItemTimings/>*/}
                </div>
            </main>
        );
    }

    componentWillMount() {
        this.props.fetchMatch(this.props.match.params.id, this.props.steamId);
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.game && this.props.bestValues == null) {
            this.props.findBestValues(nextProps.game.gameInfo.hero_id);
        }
    }
}

const mapStateToProps = (state, ownProps) => ({
    steamId: state.steamId.value,
    game: state.savedGames.find(e => (e.gameId == ownProps.match.params.id)),
    bestValues: state.heroBenchmarks
});

const mapDispatchToProps = (dispatch) => ({
    fetchMatch: (gameId, steamId) => loadGameInfo(dispatch, gameId, steamId),
});

export const GameInfo = connect(mapStateToProps, mapDispatchToProps)(Component);
