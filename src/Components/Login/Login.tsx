import { useState } from "react"

import { Button, Link, Text, TextField } from "@nike/eds"

import nikeLogo from "./../../public/images/nike.png"

import "./login.scss"

const Login = () => {
  const [email, setEmail] = useState("")

  const login = () => {
    console.log(email)
  }

  return (
    <div className='login-screen eds-grid'>
      <div className='login-screen-wrapper'>
        <img
          className='login-screen-logo'
          src={nikeLogo}
          width={80}
          alt='logo'
        />
        <h2 className='login-screen-title eds-type--title-4'>
          Enter your email to sign in
        </h2>
        <TextField
          className='login-screen-email-field'
          type='text'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id='email'
          hasErrors={false}
          errorMessage='This is a custom error message'
          placeholder='Enter your email address'
          label=''
          subtitle=''
        />
        <Text font='body-3' as={"p"}>
          By continuing, I agree to{" "}
          <Link variant='secondary'>Nike's Privacy Policy</Link> and{" "}
          <Link variant='secondary'>Terms of Use</Link>
        </Text>
        <Button
          className='login-screen-btn'
          size='medium'
          variant='primary'
          onClick={login}
        >
          Sign in
        </Button>
      </div>
    </div>
  )
}

export default Login
