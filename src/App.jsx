import { useState } from 'react'
import Input from "./components/input"

function App() {
  const [inputValue, setInputValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    userPassword: ""
  })

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
      errorMessage: ""
    },
    {
      placeholder:"Last Name",
      type: "text",
      name: "lastName",
      label: "Last Name",
      errorMessage: ""
    },
    {
      placeholder: "Email",
      type: "email",
      name: "email",
      label: "Email",
      errorMessage: ""
    },
    {
      placeholder:"Password",
      type: "text",
      name: "userPassword",
      label: "Password",
      errorMessage: ""
    },
  ]

  function handleSubmit(event) {
    event.preventDefault()
    console.log(inputValue);
  }

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
          <form onSubmit={handleSubmit} id='form' autoComplete="none">

            {formInputArray.map((itemObject, index) => {
              return (
              <Input
                key={index}
                onChangeFunc={handleChange}
                {...itemObject}
                value={inputValue[itemObject.name]}
              />)
            })}

            {/* <Input
              onChangeFunc={handleChange}
              placeholder="First Name"
              type="text"
              name="firstName"
              label="First Name"
              value={inputValue.firstName}
            />

            <Input
              onChangeFunc={handleChange}
              placeholder="Last Name"
              type="text"
              name="lastName"
              label="Last Name"
              value={inputValue.lastName}
            />

            <Input
              onChangeFunc={handleChange}
              placeholder="Email Address"
              type="email"
              name="email"
              label="Email"
              value={inputValue.email}
            />

            <Input
              onChangeFunc={handleChange}
              placeholder="Password"
              type="password"
              name="userPassword"
              label="Password"
              value={inputValue.userPassword}
            /> */}
            <button aria-label='Subscription Button' className='btn'>Claim your free trial</button>
          </form>
          <p className='terms-message'>By clicking the button, you are agreeing to our <a href='#' className='terms-condition' aria-label='Terms and Conditions'>Terms and Services</a></p>
        </div>
      </section>
    </main>
  )
}

export default App
