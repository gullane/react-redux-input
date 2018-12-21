
import React, { Component } from "react";
import PropTypes from "prop-types";
import './LabeledInput.less'

export default class NamedInput extends Component {

    static propTypes = {
        caption: PropTypes.string,
        name: PropTypes.string.isRequired,
        placeholder: PropTypes.string,
        value: PropTypes.string,
        onChange: PropTypes.func,
        edit: PropTypes.bool,
        style: PropTypes.object,
        errors: PropTypes.object,
        touched: PropTypes.object,
        onClick: PropTypes.func,
        options: PropTypes.object,
        className: PropTypes.string
    }

    static defaultProps = {
        edit: true,
        options: {},
        className: ''
    }

    state = {
        showPassword: false
    }

    render() {
        const { caption, value, onChange, name, edit, style, className, touched, errors = {}, onClick, options } = this.props
        const { password } = options
        const { showPassword } = this.state
touched[name] = true
        if (edit) {
            return (
                <div style={style} className={"labeled-input form-group " + className}>
                    <label htmlFor={name} className="form-label">{caption}</label>
                    {touched[name] && errors[name] && <div className="errors">{errors[name]}</div>}
                    <input
                        autoComplete="off"
                        name={name}
                        ref="fullName"
                        onChange={onChange}
                        placeholder=""
                        type={password ? (showPassword ? "text" : "password") : "text"}
                        className="form-control full-name"
                        value={value || ''} />
                    {password && <div className="show-password-btn" onClick={ () => this.setState({ showPassword: !this.state.showPassword }) } />}
                </div>
            );

        } else {

            return (
                <div style={style} className="labeled-input form-group readonly" onClick={onClick}>
                    <label className="form-label">{caption}</label>
                    <div className="value">{value}</div>
                    <div className="btn edit-btn" />
                </div>
            )
        }
    }
}
