import React from "react"
import Card from "@material-ui/core/Card/Card";
import {connect} from "react-redux";
import {loadRatingHistory} from "../data/actions/rating";
import Chart from 'chart.js';
import {STATUSES} from "../data/reducers/loadingStatus";
import ReactLoading from 'react-loading';

import _ from 'lodash';

class Component extends React.Component {

    render() {
        let visible = false;
        if (this.props.loadingStatus != null) {
            visible = (this.props.loadingStatus.status.toString() === STATUSES.completed);
        }


        return (
            <div className="gameInfo">
                <Card className="mmrTableCard" height="350px" width="700px">
                    {visible && <canvas id="myChart" className={"mmrTableCanvas"}/>}
                    {!visible && <ReactLoading type={"spin"} color={"#0d0eff"}/>}

                </Card>

            </div>
        );
    }

    componentDidMount() {
        this.props.loadRating(this.props.steamId);
    }

    componentDidUpdate(prevProps, prevState, snapShot) {
        if (this.props.ratings != null && this.props.ratings !== []) {
            this.drawChart();
        }
    }

    drawChart() {


        const history = Array.from(this.props.ratings);
        const mmr = _.map(history, x => x.rank);
        const dates = _.map(history, x => x.time);

        if (mmr.length === 0) {
            return;
        }
        const ctx = document.getElementById("myChart");
        if (ctx === undefined) {
            return
        }
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: dates,
                datasets: [
                    {
                        data: mmr,
                        label: "Рейтинг",
                        borderColor: "#3365cd",
                        fill: false
                    }
                ]
            },
            options: {
                scales:
                    {
                        xAxes: [{
                            display: false
                        }]
                    }
            }
        });
    }
}

const mapStateToProps = (state) => ({
    ratings: state.ratingHistory.history,
    loadingStatus: state.ratingHistory.loadingStatus,
    steamId: state.steamId.value
});

const mapDispatchToProps = (dispatch) => ({
    loadRating: (steamId) => loadRatingHistory(dispatch, steamId)
});

export const Statistics = connect(mapStateToProps, mapDispatchToProps)(Component);
