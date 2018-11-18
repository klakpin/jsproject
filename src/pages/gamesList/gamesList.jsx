import React from "react"

import morphling from "../../assets/img/morphling.jpg"
import Table from "@material-ui/core/Table/Table";
import TableHead from "@material-ui/core/TableHead/TableHead";
import TableRow from "@material-ui/core/TableRow/TableRow";
import TableBody from "@material-ui/core/TableBody/TableBody";
import TableCell from "@material-ui/core/TableCell/TableCell";
import {GamesListRow} from "./gamesListRow";
import Paper from "@material-ui/core/Paper/Paper";
import {Redirect} from "react-router";



export class GamesList extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            rowClicked: false,
            clickedRow: -1
        };

        this.handleClick = this.handleClick.bind(this);
    }


    handleClick(matchId) {
        this.setState({rowClicked: true, clickedRow: matchId});

    };


    render() {

        if (this.state.rowClicked) {
            return (<Redirect to={"/game/" + this.state.clickedRow}/>);
        }
        return (
            <Paper className="gamesTable">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Результат</TableCell>
                            <TableCell>Дата</TableCell>
                            <TableCell>Герой</TableCell>
                            <TableCell>Тип игры</TableCell>
                            <TableCell>Длительность</TableCell>
                            <TableCell>KDA</TableCell>
                            <TableCell/>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <GamesListRow
                            onClick={this.handleClick}
                            result={"Победа"}
                            date={"25.14.2018, 18:54"}
                            heroImg={morphling}
                            heroName={"Morphling"}
                            type={"Ranked AP"}
                            duration={"43:23"}
                            kda={"10-3-5"}
                        />
                        <GamesListRow
                            result={"Победа"}
                            date={"25.14.2018, 19:37"}
                            heroImg={morphling}
                            heroName={"Morphling"}
                            type={"Ranked AP"}
                            duration={"21:19"}
                            kda={"4-0-1"}
                        />
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}
