import React from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

import Button from "./Button";
import "./TaskDetails.css";

const TaskDetails = () => {
  const params = useParams();

  const history = useHistory();

  const handleBackButton = () => {
    history.goBack();
  };

  return (
    <>
      <div className="back-button-container" onClick={handleBackButton}>
        <Button>Voltar</Button>
      </div>
      
      <div className="task-details-container">
        <h2>{params.taskTitle}</h2>
        <p>
          Veio do taskdetails
        </p>
      </div>
    </>
  )
}
export default TaskDetails;
