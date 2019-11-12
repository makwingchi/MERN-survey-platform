import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Landing extends React.Component {
  renderButton() {
    switch (this.props.auth){
      case null:
        return 
      case false:
        return (
          <a href="/auth/google" style={{color: "black"}}>
            Log in to get started
            <i className="right arrow icon"></i>
          </a>
        )
      default:
        return (
          <Link to="/surveys">
            <div style={{color: "black"}}> 
              Get Started
              <i className="right arrow icon"></i>
            </div>
          </Link>
        )
    }
  }
  
  render() {
    return (
      <div className="ui text container" style={{margin: "30vh auto"}}>
        <i class="far fa-paper-plane fa-5x"></i>
        <h2>Collec+ feedback from your users!</h2>
        <div className="ui huge basic button">
          {this.renderButton()}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { auth: state.auth }
}

export default connect(mapStateToProps)(Landing);