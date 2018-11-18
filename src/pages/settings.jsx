import React from "react"
import Paper from "@material-ui/core/Paper/Paper";
import Button from "@material-ui/core/Button/Button";
import TextField from "@material-ui/core/TextField/TextField";


export const Settings = () => (
    <Paper className="settings">
        <div className={"steam-id-selection"}>
            <TextField label="Steam id"
                       variant="outlined"/>
            <Button variant="contained" color="secondary">Сохранить</Button>
        </div>
    </Paper>
);

