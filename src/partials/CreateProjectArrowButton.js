import React from 'react'
import ArrowForwardRoundedIcon from "@material-ui/icons/ArrowForward";
import "./CreateProjectArrowButton.css";
import Button from "@material-ui/core/Button";
import Icon from '@material-ui/core/Icon';
export default function CreateProjectArrowButton(title) {
    return (
        <div class="create-project-card-button-div">
            <Button className="card-create-project-button" variant="contained" color="primary">
        Create Project <ArrowForwardRoundedIcon style={{paddingLeft: "80"}}/>
            <ArrowForwardRoundedIcon />
            </Button>
        </div>
    )
}
