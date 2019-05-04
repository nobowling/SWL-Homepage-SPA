import { Form, Button } from 'semantic-ui-react'
import React, { Component } from 'react';

const LoginForm = () => {
  return (
    <div>
      <h2>Log in</h2>
      <Form>
        <Form.Field>
          <label>Username</label>
          <input name='username' />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input type='password' />
        </Form.Field>
        <Button type='submit'>Login</Button>
      </Form>
    </div>
  )
}

export default LoginForm