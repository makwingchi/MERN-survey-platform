import React from 'react'

const Intro = () => {
  return (
    <div className="ui text container" style={{margin: "10vh auto", textAlign: 'left'}}>
      <h1 style={{textAlign: 'center'}}>Who We Are?</h1>
      <h2 className="ui header">
        <i className="user icon"></i>
        <div className="content">
          Easy to Use
        </div>
      </h2>
      <p>
        Here, you can log in with your Google account and start using our application 
        to boost your product sales by sending surveys to your customers.
      </p>
      <h2 className="ui header">
        <i class="database icon"></i>
        <div className="content">
          Safe Storage
        </div>
      </h2> 
      <p>
        We make use of MongoDB for large volumes of structured and non-structured data.
      </p>
      <h2 className="ui header">
        <i class="envelope icon"></i>
        <div className="content">
          Fast Connection
        </div>
      </h2> 
      <p>
        We use SendGrid API trusted by numerous developers and marketers for 
        time-savings and delivery expertise.
      </p>
    </div>
  )
}

export default Intro;