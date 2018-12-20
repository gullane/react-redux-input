import React from 'react'

const Form = ({ current, valid, onChange, onReset, onSubmit, submitting, message, error }) =>  (
    <div className={submitting ? "Disabled" : ""}>
        <div>Firstname:</div>
        <input type="text" value={current.firstname} onChange={(e) => onChange("firstname", e.target.value, validations.firstname) } />
        <div>Lastname:</div>
        <input type="text" value={current.lastname} onChange={(e) => onChange("lastname", e.target.value, validations.lastname) } />

        <div>Address:</div>
        <input type="text" value={current.address.street} onChange={(e) => onChange("address.street", e.target.value, validations[address.street]) } />
        <input type="text" value={current.address.city} onChange={(e) => onChange("address.city", e.target.value, validations[address.city]) } />

        <button onClick={onReset}>RESET</button>
        <button onClick={onSubmit} className={isValid(validations, current) ? "" : "Disabled"}>SUBMIT</button>
        <div className="message">{message}</div>
        <div className="error">{error}</div>
    </div>
)

export default Form

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
    "address.street": (value, values) => {
        return ""    
    },
    "address.city": (value, values) => {
        if (value.length < 1) return "Please type a city"
        return ""    
    }

}

const isValid = (validations, values) => {
    let error = ''
    Object.entries(values).some(entry => {
        error = validations[entry[0]](entry[1], values)
        return !!error
    })
    return true
    // values.some(fieldId: fields[fieldId]fieldName:
    // fields.some()
    // const getFieldError = (value, field) => field(value)
}

const object1 = { foo: 'bar', baz: 42 };
console.log(Object.entries(object1)[1]);
// expected output: Array ["baz", 42]
