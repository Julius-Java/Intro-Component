function Input(props) {

    const {name, onChangeFunc, placeholder, type, label, value, errorMessage} = props

    return (
        <div className={"input " + {name} + "-input"}>
            <input
                onChange={onChangeFunc}
                placeholder={placeholder}
                className={name}
                type={type}
                name={name}
                aria-label={label}
                value={value}
                autoComplete="none"
            />

            <img
                className="error-icon"
                src="./images/icon-error.svg"
                alt="Input Error Icon"
            />

            <p className="error-message">
                <i>{errorMessage}</i>
            </p>
        </div>
    )
}

export default Input;