// shows users their form inputs for review
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions/index';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = _.map(formFields, field => {
    return (
      <div key={field.name} className="field" style={{textAlign: "left"}}>
        <label>{field.label}</label>
        <input placeholder={formValues[field.name]} readonly="" type="text"></input>
      </div>
    );
  })

  return (
    <div className="ui form" style={{margin: "3% auto", width: "40%"}}>
      <h4 className="ui dividing header" style={{textAlign: "left"}}>Please Confirm your Entries</h4>
      {reviewFields}
      <div className="ui buttons">
        <button className="ui button" onClick={onCancel}>Back</button>
        <div className="or"></div>
        <button 
        className="ui positive button"
        onClick={() => submitSurvey(formValues, history)}
        >
          Send Survey
        </button>
      </div>
    </div>
  )
}

function mapStatesToProps(state) {
  return {
    formValues: state.form.surveyForm.values
  };
};

export default connect(mapStatesToProps, actions)(withRouter(SurveyFormReview));