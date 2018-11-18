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
                    {this.props.result}</TableCell>
                <TableCell>{this.props.date}</TableCell>
                <TableCell>
                    <img src={this.props.heroImg} className="heroImage"/>
                    {this.props.heroName}
                </TableCell>
                <TableCell>{this.props.type}</TableCell>
                <TableCell>{this.props.duration}</TableCell>
                <TableCell>{this.props.kda}</TableCell>
                <TableCell><Link to={"game/23"}>Подробнее</Link></TableCell>
            </TableRow>
        );
    }
}

GamesListRow.propTypes = {
    result: PropTypes.string,
    date: PropTypes.string,
    heroImg: PropTypes.any,
    heroName: PropTypes.string,
    type: PropTypes.string,
    duration: PropTypes.string,
    kda: PropTypes.string
};