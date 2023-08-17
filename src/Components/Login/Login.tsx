import { useState } from "react"

import { Button, Link, Text, TextField } from "@nike/eds"

import "./login.scss"

const Login = () => {
  const [email, setEmail] = useState("")

  const login = () => {
    console.log(email)
  }

  return (
    <div className='login-screen eds-grid'>
      <div className='login-screen-wrapper'>
        <svg
          aria-hidden='true'
          focusable='false'
          viewBox='0 0 24 24'
          role='img'
          width='80px'
          height='80px'
          fill='none'
        >
          <path
            fill='currentColor'
            fill-rule='evenodd'
            d='M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z'
            clip-rule='evenodd'
          ></path>
        </svg>
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
