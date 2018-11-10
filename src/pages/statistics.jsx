import React from "react"
import Card from "@material-ui/core/Card/Card";
import {connect} from "react-redux";
import {loadRatingHistory} from "../data/actions/rating";
import Chart from 'chart.js';

class Component extends React.Component {

    render() {
        // let visible;
        //
        // switch (this.props.loadingStatus.status) {
        //     case STATES.READY:
        //     case STATES.LOADING:
        //     case STATES.ERROR:
        //         visible = false;
        //         break;
        //     case STATES.COMPLETED:
        //         visible = true;
        //         break;
        // }

        return (
            <div className="gameInfo">
                <Card className="mmrTableCard" height="350px" width="700px">
                    <canvas id="myChart" className={"mmrTableCanvas"}/>
                    {/*{visible && <canvas id="myChart" className={"mmrTableCanvas"} />}*/}
                    {/*{!visible && <ReactLoading type={"spin"} color={"#0d0eff"}/>}*/}

                </Card>

            </div>
        );
    }

    componentDidMount() {
        this.props.loadRating(this.props.steamId);
    }

    componentDidUpdate(prevProps, prevState, snapShot) {
        if (this.props.ratings !== []) {
            this.drawChart();
        }
    }

    drawChart() {

        let dates = [], mmr = [];

        this.props.ratings.forEach((e) => {
            dates.push(e.time);
            mmr.push(e.rank);
        });

        if (mmr.length === 0) {
            return;
        }
        const ctx = document.getElementById("myChart");

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
