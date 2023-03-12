import { useState } from 'react'
import Input from "./components/input"

function App() {
  const [inputValue, setInputValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    userPassword: ""
  })

  function isDataEmpty(inputObject) {
    return Object.values(inputObject).every(value => value === "");
  }

  function validateEmail(emailValue) {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(emailValue);
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (isDataEmpty(inputValue)) {
      event.target.classList.add("error")
      setTimeout(() => {
        event.target.classList.remove("error")
      }, 6000)
    } else {
      if (!validateEmail(inputValue.email)) {
        event.target.classList.add("email-error")
        setTimeout(() => {
          event.target.classList.remove("email-error")
        }, 4000)
      } else {
        event.target.submit()
      }
    }
  }

  function handleChange(event) {
    const {name, value} = event.target;

    setInputValue(preValue => {
      return {
        ...preValue,
        [name] : value
      }
    })
  }

  const formInputArray = [
    {
      placeholder:"First Name",
      type: "text",
      name: "firstName",
      label: "Last Name",
      errorMessage: "First name cannot be empty",
      pattern: "John",
      // required: true
    },
    {
      placeholder:"Last Name",
      type: "text",
      name: "lastName",
      label: "Last Name",
      errorMessage: "Last name cannot be empty",
      // required: true
    },
    {
      placeholder: "Email",
      type: "email",
      name: "email",
      label: "Email",
      errorMessage: "Looks like this isn't an email",
      // required: true
    },
    {
      placeholder:"Password",
      type: "text",
      name: "userPassword",
      label: "Password",
      errorMessage: "Password cannot be empty",
      // required: true
    },
  ]



  return (
    <main id='main'>
      <section className='info'>
        <h1 className='heading'>Learn to code by watching others</h1>
        <p className='text'>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
      </section>
      <section className='form-section'>
        <div className='price-banner'>
          <p><span className='banner-span'>Try it free 7 days</span> then $20/mo. thereafter</p>
        </div>
        <div className="form-container">
          <form onSubmit={handleSubmit} id='form' autoComplete="off">

            {formInputArray.map((itemObject, index) => {
              return (
              <Input
                key={index}
                onChangeFunc={handleChange}
                {...itemObject}
                value={inputValue[itemObject.name]}
              />)
            })}

            <button aria-label='Subscription Button' className='btn'>Claim your free trial</button>
          </form>
          <p className='terms-message'>By clicking the button, you are agreeing to our <a href='#' className='terms-condition' aria-label='Terms and Conditions'>Terms and Services</a></p>
        </div>
      </section>
    </main>
  )
}

export default App
