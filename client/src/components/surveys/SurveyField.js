// SurveyField contains logic to render a single label and text input

import React from 'react';

export default ({ input, label, meta: {error, touched} }) => {
  return (
    <div className="required field" style={{textAlign: "left"}}>
      <label>{ label }</label>
      <input {...input} style={{marginBottom: '5px'}} />
      <div className="ui error message" style={{ marginBottom: '10px'}}>
        {touched && error}
      </div>
    </div>
  )
}