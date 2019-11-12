import React from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions/';

class SurveyList extends React.Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    return this.props.surveys.reverse().map(survey => {
      return (
        <div className="card" key={survey._id} >
          <div className="content">
            <div className="header">
              <h2>{survey.title}</h2>
            </div>
            <div className="meta">Send on: {new Date(survey.dateSent).toLocaleDateString()}</div>
            <div className="description">
              <p>{survey.body}</p>
            </div>
          </div>
          <div className="extra content">
            <i className="check icon"></i>
            {survey.yes}
            <i className="close icon"></i>
            {survey.no}
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <div className="ui three stackable cards" style={{margin: "1% 20%"}}>
        {this.renderSurveys()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { surveys: state.surveys };
}

export default connect(mapStateToProps, {fetchSurveys})(SurveyList);