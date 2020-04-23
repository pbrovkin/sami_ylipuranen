import React from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import  formStyles from './Subscription.module.css'
import Greeting from './greeting'

export default class Subscription extends React.Component {
    state = {
        email:'',
        name:'',
        isSubscribed:false
        
    }

    _handleChange = (e) => {
       
        this.setState({
            [`${e.target.name}`]: e.target.value,
        });
    }

    _handleSubmit = (e) => {
        e.preventDefault();
    
        addToMailchimp(this.state.email,{NAME:this.state.name})
        .then(data=>{
       this.setState({isSubscribed:true})
        
         
        })
        .catch((error) => {
          // Errors in here are client side
          // Mailchimp always returns a 200
        });
     }

    render() {
        return (
            <div>
                <div>
                {
                            this.state.isSubscribed ===true ? <Greeting/> :
                    <form className={formStyles.EmailListForm}  onSubmit={this._handleSubmit} >
                   <label>Email</label> 
                    <input
                            type="email"
                            value={this.state.email}
                            onChange={(event) => this._handleChange(event)}
                            placeholder="email@email.com"
                            name="email"
                            required pattern='[a-z0-9._%+-]+@[a-z0-9.-]+`?\.[a-z]{2,4}$'
                             />
                             <label>Name</label>
                        <input
                            type="text"
                            value={this.state.name}
                            onChange={(event) => this._handleChange(event)}
                            placeholder="Name"
                            name="name"
                        />
                        
                        <button>Subscribe</button>
                    </form>
    }
                </div>
            </div>
        );
    }
}