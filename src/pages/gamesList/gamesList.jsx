import React from "react"
import Table from "@material-ui/core/Table/Table";
import TableHead from "@material-ui/core/TableHead/TableHead";
import TableRow from "@material-ui/core/TableRow/TableRow";
import TableBody from "@material-ui/core/TableBody/TableBody";
import TableCell from "@material-ui/core/TableCell/TableCell";
import {GamesListRow} from "./gamesListRow";
import Paper from "@material-ui/core/Paper/Paper";
import {connect} from "react-redux";
import {loadMatches} from "../../data/actions/matchesList";


class Component extends React.Component {

    render() {
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


                        {this.props.matches.history.length > 0 && this.props.matches.history.map(match => (<GamesListRow
                            key={match.id}
                            id={match.id}
                            result={match.isWinner}
                            date={match.date}
                            heroName={match.heroName.localized_name}
                            heroImg={match.heroName.nameForUrl}
                            type={match.type}
                            duration={match.length}
                            kda={match.kda}
                        />))}
                    </TableBody>
                </Table>
            </Paper>
        );
    }

    componentDidMount() {
        this.props.loadMatches(this.props.steamId);

    }
}

const mapStateToProps = (state) => ({
    matches: state.recentMatches,
    steamId: state.steamId.value
});

const mapDispatchToProps = (dispatch) => ({
    loadMatches: (steamId) => loadMatches(dispatch, steamId)
});

export const GamesList = connect(mapStateToProps, mapDispatchToProps)(Component);