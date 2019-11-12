// Shows a form for a user to add input
import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

class SurveyForm extends React.Component {
  renderFields() {
    return _.map(formFields, ({label, name}) => {
      return <Field key={name} component={SurveyField} type="text" label={label} name={name} />
    })
  }

  render() {
    return (
      <div style={{margin: "3% auto"}}>
        <form className="ui form error" onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)} style={{width: "40%", margin: "auto"}}>
          {this.renderFields()}
          <div class="ui buttons">
            <Link to="/surveys" className="ui button">Cancel</Link>
            <div class="or"></div>
            <button className="ui positive button" type="submit">Next</button>
          </div>  
        </form>
      </div>
    )
  }
}

function validate(values) {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || "");

  _.each(formFields, ({name}) => {
    if (!values[name]) {
      errors[name] = `You must provide a value`;
    }
  })

  return errors;
}

export default reduxForm({
  validate,
  form: "surveyForm", // specifies where redux form is going to store all the values out of the form inside of our redux store
  destroyOnUnmount: false // default is true
})(SurveyForm);