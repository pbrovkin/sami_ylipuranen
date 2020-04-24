import React from 'react'
//import {Link} from 'gatsby'
import formStyles from './subscription.module.css'

 const Greeting = (props) => {
    return (
       <div className={formStyles.greeting}>
         
            <h1>Thanks for signing up,{props.name}!</h1>
            <p>You'll be getting my information about blogs in your inbox.</p>
           {/* <Link to='/blogi'> <button >Go Back</button></Link> */}
       </div>
       

    )
}
export default Greeting