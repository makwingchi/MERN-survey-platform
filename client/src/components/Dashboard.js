import React from 'react';
import { Link } from 'react-router-dom';
import SurveyList from "./surveys/SurveyList";

const Dashboard = () => {
  return (
    <div>
      <SurveyList />
      <Link to="/surveys/new">
        <button className="ui circular red icon button">
          <i class="pencil alternate icon"></i>
        </button> 
      </Link>
    </div>
  )
}

export default Dashboard;