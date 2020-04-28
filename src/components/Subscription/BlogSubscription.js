import React from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import formStyles from "./subscription.module.css"
import Greeting from "./greeting"
import Button from "../button";

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
        <>
          {this.state.isSubscribed === true ? (
            <Greeting name={this.state.name} />
          ) : (
            <form
              className={formStyles.EmailListForm}
              onSubmit={this._handleSubmit}
            >
            <fieldset className={formStyles.Fieldset}>
              <legend className={formStyles.Legend}>rekisteröidy blogipäivityksiin</legend>
              <div>
                <label for="email" className={formStyles.Label}>Sähköposti:
                <input className={formStyles.SignUpinput}
                  type="email"
                  value={this.state.email}
                  onChange={event => this._handleChange(event)}
                  name="email"
                  id="email"
                  required
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+`?\.[a-z]{2,4}$"
                  />
                </label>
              </div>
              <br/>
              <div>
                <label for="name">Nimi:
                <input className={formStyles.SignUpinput}
                  type="text"
                  value={this.state.name}
                  onChange={event => this._handleChange(event)}
                  placeholder=""
                  name="name"
                  id="name"
                />
                </label>
              </div>
              <div className={formStyles.ButtonDiv}>
              <Button label={'Kirjaudu'}/>
              </div>
            </fieldset>
            </form>
          )}
        </>
    )
  }
}

export default Subscription