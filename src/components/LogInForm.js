import React, { Component } from 'react'
import { logIn } from '../utilities/users-service'

export default class LogInForm extends Component {
    state = {
        email: '',
        password: '',
        error: ''   
    }

    handleSubmit = async (e) => {
      e.preventDefault()
      try {
        const formData = {...this.state}
        delete formData.error

        const user = await logIn(formData)
        this.props.setUser(user)
      } catch(e) {
        this.setState({ error: 'Log In Failed - Try Again' })
      }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            error: ''
        })
    }

    render() {
        return (
          <div>
            <div className="form-container">
              <form autoComplete="off" onSubmit={this.handleSubmit}>
                <label>Email</label>
                <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
                <label>Password</label>
                <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
                <button type="submit" >LOG IN</button>
              </form>
            </div>
            <p className="error-message">&nbsp;{this.state.error}</p>
          </div>
        ) 
    }
}