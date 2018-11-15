import React from "react"
import Paper from "@material-ui/core/Paper/Paper";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {setUpSteamId} from "../data/actions/setupSteamId";


const required = value => (value || typeof value === 'number' ? undefined : 'Required')
const maxLength = max => value =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined;
const maxLength15 = maxLength(15);
export const minLength = min => value =>
    value && value.length < min ? `Must be ${min} characters or more` : undefined;
export const minLength4 = minLength(4);

let active = true;

const form = props => {
    const {handleSubmit} = props;

    return (
        <form className="settingsForm" onSubmit={handleSubmit}>
            <Field
                name="SteamId"
                component="input"
                type="number"
                placeholder="Steam32 ID"
                validate={[required, maxLength15, minLength4]}
                className="mdl-textfield__input steamIdInput"
            />
            <button type="submit"
                    className={"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" + (active ? "" : " mdl-button--disabled")}>Сохранить
            </button>
        </form>

    );
};

const ConnectedForm = reduxForm({form: "settingsForm"})(form);


class Component extends React.Component {

    handleSubmit = (values) => {
        this.props.setUpSteamId(values.SteamId);
    };

    render() {
        return (
            <Paper className="settings">
                <ConnectedForm onSubmit={this.handleSubmit} prop2={"kek"}/>
            </Paper>
        );
    }
}


const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    setUpSteamId: (value) => dispatch(setUpSteamId(value))
});


export const Settings = connect(mapStateToProps, mapDispatchToProps)(Component);
