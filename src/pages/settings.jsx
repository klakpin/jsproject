import React from "react"
import Paper from "@material-ui/core/Paper/Paper";
import {Field, Form, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {setUpSteamId} from "../data/actions/setupSteamId";

let active = false;

const validator = value => {


    const res = (value && value.toString().length > 3 && value.toString().length < 15);
    active = res;
    if (res) {
        return 0;
    } else {
        return 1;
    }
};

const SteamIdForm = props => {
    const {handleSubmit} = props;
    return (
        <Form className="settingsForm" onSubmit={handleSubmit}>
            <Field
                name="SteamId"
                component="input"
                type="number"
                placeholder="Steam32 ID"
                validate={[validator]}
                className="mdl-textfield__input steamIdInput"
            />
            <button type="submit"
                    className={"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" + (active ? "" : " mdl-button--disabled")}>Сохранить
            </button>
        </Form>

    );
};



const ConnectedForm = reduxForm({form: "SteamIdForm"})(SteamIdForm);


class Component extends React.Component {

    handleSubmit = (values) => {
        this.props.setUpSteamId(values.SteamId);
    };

    render() {
        return (
            <Paper className="settings">
                <ConnectedForm onSubmit={this.handleSubmit}/>
            </Paper>
        );
    }
}


const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    setUpSteamId: (value) => dispatch(setUpSteamId(value))
});


export const Settings = connect(mapStateToProps, mapDispatchToProps)(Component);
