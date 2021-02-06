import React from 'react'
import Button from "@material-ui/core/Button";
import ClearSharpIcon from '@material-ui/icons/ClearSharp';
import './CancelButtonInCard.css'

export default function CancelButtonInCard() {
    return (
        <div className="cancel-button-div-in-card-profile">
        <Button className="cancel-button-in-card-profile" color="secondary">Cancel  
        <ClearSharpIcon className="cancel-button-icon-in-card-profile"/>
        </Button>
        </div>
    )
}

