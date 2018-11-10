import React from "react";
import TableRow from "@material-ui/core/TableRow/TableRow";
import TableCell from "@material-ui/core/TableCell/TableCell";
import * as PropTypes from "prop-types";
import Link from "react-router-dom/es/Link";

export class GamesListRow extends React.Component {
    render() {

        return (
            <TableRow>
                <TableCell>
                    {this.props.result ? "Победа" : "Поражение"}
                </TableCell>
                <TableCell>{this.props.date}</TableCell>
                <TableCell>
                    <img src={`https://api.opendota.com/apps/dota2/images/heroes/${this.props.heroImg}_sb.png`}
                         className="heroImage"/>
                    {this.props.heroName}
                </TableCell>
                <TableCell>{this.props.type}</TableCell>
                <TableCell>{this.props.duration}</TableCell>
                <TableCell>{this.props.kda}</TableCell>
                <TableCell><Link to={`/game/${this.props.id}`}>Подробнее</Link></TableCell>
            </TableRow>
        );
    }
}


GamesListRow.propTypes = {
    id: PropTypes.number,
    result: PropTypes.bool,
    date: PropTypes.string,
    heroImg: PropTypes.any,
    heroName: PropTypes.string,
    type: PropTypes.string,
    duration: PropTypes.string,
    kda: PropTypes.string
};

