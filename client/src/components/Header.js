import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends React.Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <a href="/us" className="item">About us</a>
        )
      default:
        return [
          <a className="item"><Payments /></a>,
          <a className="item" style={{marginLeft: 5}}>
            Credits: {this.props.auth.credits}
          </a>,
          <a href="/api/logout" className="item" style={{marginLeft: 5}}>Log out</a>
        ]
    }
  }

  render() {
    return (
      <div className="ui container">
        <div className="ui secondary pointing menu" style={{width: "100%"}}>
          <a className="item">
            <i className="paper plane outline icon"></i>
          </a>
          <Link 
            to={this.props.auth ? "/surveys" : "/"} 
            className="active item"
          >
            Collec+
          </Link>
          <div className="right item" style={{padding: 5}}>
            {this.renderContent()}
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { auth: state.auth }
}

export default connect(mapStateToProps)(Header);