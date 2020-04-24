import React from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import formStyles from "./subscription.module.css"
import Greeting from "./greeting"

class Subscription extends React.Component {
  state = {
    email: "",
    name: "",
    isSubscribed: false,
  }

  _handleChange = e => {
    this.setState({
      [`${e.target.name}`]: e.target.value,
    })
  }

  _handleSubmit = e => {
    e.preventDefault()
    
    console.log(this.state.email,this.state.name)
    addToMailchimp(this.state.email, { NAME: this.state.name })
      .then(data => {
        this.setState({ isSubscribed: true })
        
      })
      .catch(error => {
        // Errors in here are client side
        // Mailchimp always returns a 200
      })
  }

  render() {
    return (
      <div>
        <div>
          {this.state.isSubscribed === true ? (
            <Greeting name={this.state.name} />
          ) : (
            <form
              className={formStyles.EmailListForm}
              onSubmit={this._handleSubmit}
            >
            <fieldset>
              <legend>Kirjaudu blogin päivitykset</legend>
              <label for="email">Sähköposti
              <input
                type="email"
                value={this.state.email}
                onChange={event => this._handleChange(event)}
                placeholder="nimi@gmail.com"
                name="email"
                id="email"
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+`?\.[a-z]{2,4}$"
              />
              </label>
              
              <label for="name">Nimi
              <input
                type="text"
                value={this.state.name}
                onChange={event => this._handleChange(event)}
                placeholder=""
                name="name"
                id="name"
              />
              </label>
            </fieldset>
              
              

              <button type='submit'>Subscribe</button>
            </form>
          )}
        </div>
      </div>
    )
  }
}

export default Subscription