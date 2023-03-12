function Input(props) {

    const {name, onChangeFunc, placeholder, type, label, value, errorMessage} = props

    // For the email input add an extra class to the icon and error-message such that we display the error elements only on the email input when there is an input error
    const extraClassNameIcon = name === "email" ? "email-error-icon" : ""
    const extraClassNameMessage = name === "email" ? "email-error-message" : ""
    const extraClassNameBorder = name === "email" ? "email-error-input" : ""

    return (
        <div className={"input " + {name} + "-input"}>
            <input
                onChange={onChangeFunc}
                placeholder={placeholder}
                className={name + " " + `${extraClassNameBorder}`}
                type={type}
                name={name}
                aria-label={label}
                value={value}
            />

            <p className={"error-message " + `${extraClassNameMessage}`}>
                <i>{errorMessage}</i>
            </p>

            <img
                className={"error-icon " + `${extraClassNameIcon}`}
                src="./images/icon-error.svg"
                alt="Input Error Icon"
            />
        </div>
    )
}

export default Input;