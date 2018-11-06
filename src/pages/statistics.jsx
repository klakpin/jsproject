import React from "react"
import Chart from "chart.js"
import "../style.css"
import Card from "@material-ui/core/Card/Card";

export class Statistics extends React.Component {
    render() {
        return (
        <div className="gameInfo">
            <Card className="mmrTableCard">
                <canvas id="myChart" height="350px" width="700px"/>
            </Card>
        </div>
        );
    }

    componentDidMount() {
        const dates = ["01.01.2016", "10.01.2016", "20.01.2016", "02.02.2016", "01.03.2016",
            "10.04.2016", "15.04.2016", "10.05.2016", "15.06.2016"];
        const mmr = [3456, 3545, 3784, 3417, 3987, 3489, 3145, 3789, 3489];


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
            }
        });
    }
}