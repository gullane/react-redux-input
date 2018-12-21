
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import LabeledInput from './LabeledInput'
/*
import NamedSelectInput, { optionsMaleFemale,  optionsTrueFalse } from './NamedSelectInput'
import NamedPhoneInput from './NamedPhoneInput'
import NamedDateInput from './NamedDateInput'
*/
import './RelativeForm.less'
import * as yup from 'yup'
// import Confirm from '../Common/Confirm'
// import { editRelative } from 'PatientUiActions'
// import { getChanges, W30, W40, W50, W60, W70, W100 } from '../Common/PatientCommon'
// import _ from 'lodash'
// import base from 'base'
// import Avatar from 'Avatar'
// import { NBSP } from 'Constants'


export default class RelativeForm extends Component {

    static propTypes = {
        current: PropTypes.object,
        onSave: PropTypes.func,
        name : PropTypes.string,
        editRelative: PropTypes.func,
        mobile: PropTypes.bool.isRequired
    }

    constructor(props) {
        super(props)
        this.state = {
           // styles: this.setupStyles(props.mobile),
            confirmCancel: false
        }
    }
/*
    setupStyles = mobile => ({
        "lastname": mobile ? W100 : W50,
        "firstname": mobile ? W100 : W50,
        "gender": mobile ? W50 : W30,
        "email": mobile ? W100 : W70,
        "dateOfBirth": mobile ? W100 : W100,
        "cellPhoneNumber": mobile ? W100 :W50,
        "street1": mobile ? W100 :W70,
        "zip": mobile ? W50 : W30,
        "street2": mobile ? W100 :W50,
        "city": mobile ? W50 : W50,
        "hasCMU": mobile ? W50: W30,
        "ssn": mobile? W100 : W40,
        "hasAME": mobile ? W100 : W30,
        "primaryDoctorFirstname": mobile ? W50 : W50,
        "primaryDoctorLastname": mobile ? W50 : W50
    })*/

    onCancel = () => {
        this.setState({ confirmCancel: true })
    }

    onCancelConfirmed = () => {
        //this.props.editRelative(null)
    }

    render() {
        const { submitting, current, onSave, onChange } = this.props
        const { confirmCancel, styles } = this.state

        /*const validationSchema = this.getValidationSchema(relative)

        const initialValues= {
            firstname: relative.firstname,
            lastname: relative.lastname,
            gender: relative.gender || "male",
            email: relative.email || '',
            address: relative.address,
            cellPhoneNumber: relative.cellPhoneNumber,
            countryCode: relative.countryCode,
            amo: relative.amo,
            primaryDoctor: relative.primaryDoctor,
            dateOfBirth: relative.dateOfBirth,
            hasCMU: relative.hasCMU || false,
            hasAME: relative.hasAME || false,
            ssn: relative.ssn,
        }
*/
        return (
            <div className={"relative-form " + (submitting ? "Disabled" : "")}>
                {/* confirmCancel &&
                    <Confirm title={CONFIRM_QUIT_TITLE} message={CONFIRM_QUIT_MESSAGE} mobile={base.isMobile()}
                        onCancel={() => this.setState({  confirmCancel: null }) }
                        onConfirm={this.onCancelConfirmed} />*/}

                <div className="back-btn" onClick={this.onCancel} />

                {/*<Field name="picture">{({ field, form }) => (
                    <Avatar profile={relative} onChange={picture => { form.setFieldValue('picture', picture) } } />
                )}</Field>*/}

                <LabeledInput value={current.firstname} onChange={(e) => onChange("firstname", e.target.value, validations.firstname) } errors={errors} touched={touched}  name="lastname" caption="Nom"  />
{/*}
                <Field name="firstname">{({ field, form }) => (
                    <LabeledInput className="transparent-fields" errors={errors} touched={touched} style={styles.firstname} name="firstname" caption="Prénom" {...field}  />
                )}</Field>

                <Field name="gender">{({ field, form }) => (
                    <NamedSelectInput form={form} errors={errors} touched={touched} style={styles.gender} name="gender" caption="Sexe" optionList={optionsMaleFemale} {...field}  />
                )}</Field>

                <Field name="email">{({ field, form }) => (
                    <LabeledInput className="transparent-fields" errors={errors} touched={touched} style={styles.email} name="email" caption="Email" {...field}  />
                )}</Field>

                <Field name="dateOfBirth">{({ field, form }) => (
                    <NamedDateInput form={form} errors={errors} touched={touched} style={styles.dateOfBirth} name="dateOfBirth" caption="Date de naissance" {...field}  />
                )}</Field>

               <Field name="cellPhoneNumber">{({ field, form }) => (
                    <NamedPhoneInput form={form} errors={errors} touched={touched} styles={styles} name="cellPhoneNumber" caption="Téléphone" {...field} options={ { phoneClass: "patient-space" } }  />
                )}</Field>

                <Field name="address.street1">{({ field, form }) => (
                    <LabeledInput className="transparent-fields" errors={errors} touched={touched} style={styles.street1} name="address.street1" caption="Adresse" {...field}  />
                )}</Field>

                <Field name="address.zip">{({ field, form }) => (
                    <LabeledInput className="transparent-fields" errors={errors} touched={touched} style={styles.zip} name="zip" caption="Code postal" {...field}  />
                )}</Field>

                <Field name="address.street2">{({ field, form }) => (
                    <LabeledInput className="transparent-fields" errors={errors} touched={touched} style={styles.street2} name="address.street2" caption="Bâtiment, Appartement" {...field}  />
                )}</Field>

                <Field name="address.city">{({ field, form }) => (
                    <LabeledInput className="transparent-fields" errors={errors} touched={touched} style={styles.city} name="city" caption="Ville" {...field}  />
                )}</Field>

                <Field name="hasCMU">{({ field, form }) => (
                    <NamedSelectInput form={form} errors={errors} touched={touched} style={styles.hasCMU} name="hasCMU" caption="Bénéficiaire CMU" optionList={optionsTrueFalse} {...field}  />
                )}</Field>

                <Field name="ssn">{({ field, form }) => (
                    <LabeledInput className="transparent-fields" errors={errors} touched={touched} style={styles.ssn} name="ssn" caption="N° Sécurité sociale" {...field}  />
                )}</Field>

                <Field name="hasAME">{({ field, form }) => (
                    <NamedSelectInput form={form} errors={errors} touched={touched} style={styles.ame} name="hasAME" caption="AME" optionList={optionsTrueFalse} {...field}  />
                )}</Field>

                <div className="medecin-traitant-hr"><div className="caption">{NBSP}Médécin traitant{NBSP}</div></div>


                <Field name="amo.primaryDoctorFirstname">{({ field, form }) => (
                    <LabeledInput className="transparent-fields" errors={errors} touched={touched} style={styles.primaryDoctorFirstname} name="amo.primaryDoctorFirstname" caption="Nom" {...field}  />
                )}</Field>

                <Field name="amo.primaryDoctorLastname">{({ field, form }) => (
                    <LabeledInput className="transparent-fields" errors={errors} touched={touched} style={styles.primaryDoctorLastname} name="amo.primaryDoctorLastname" caption="Prénom" {...field}  />
                )}</Field>
*/}
                <div className="clearfix" />

                <div className="center-button">
                    <button className="btn btn-orange" type="submit">
                        ENREGISTRER
                    </button>
                </div>
            </div>
        );
    }

    getValidationSchema(values) {
        return yup.object().shape({
            lastname: yup.string()
                .required('Veuillez saisir un nom')
        })
    }

}


export const CONFIRM_QUIT_TITLE = <span>Annuler <b>l'edition</b></span>
export const CONFIRM_QUIT_MESSAGE = <span>Êtes vous <b>sûr(e)</b> de vouloir <b>annuler{NBSP}?<br />Tous les changements seront perdus</b></span>

/*
const mapStateToProps = state => ({
    mobile: state.ui.mobile,
    relative: state.ui.profile.currentRelative,
    errors: state.errors
})

export default connect(
    mapStateToProps,
    { editRelative }
)(RelativeForm);
*/


const validations = {
    firstname: (value, values) => {
        if (value.length < 2) return "First name length should be > 2"
        if (value.length > 10 && values.lastname) return "First name length should be < 10"
        if (value.indexOf('$') !== -1) return "First name cannot contain the character '$'"
        return ""    
    },
    lastname: (value, values) => {
        if (value.length < 2) return "Lastname length should be > 2"
        if (value.length > 10 && values.firstname) return "Lastname length should be < 10"
        if (value.indexOf('$') !== -1) return "Lastname cannot contain the character '$'"
        return ""    
    },
    address: (value, values) => {
        if (value.city.length < 1) return "Please type a city"
        return ""    
    }

}