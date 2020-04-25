import React from 'react'
//import {Link} from 'gatsby'
import formStyles from './subscription.module.css'

 const Greeting = (props) => {
    return (
       <div className={formStyles.greeting}>   
            <h1 className={formStyles.ThankYouH}>Kiitos rekisteröitymisestäsi,{props.name}!</h1>
            <p className={formStyles.ThankYouP}>Saatte nyt blogipäivitykset sähköpostiin.</p>
           {/* <Link to='/blogi'> <button >Go Back</button></Link> */}
       </div>
    )
}
export default Greeting