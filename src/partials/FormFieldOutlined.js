import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './FormFieldOutlined.css'

export default function FormFieldOutlined({labelName}) {
    return (
        <div>
            <form className="outter-form-class" noValidate autoComplete="off">
                <TextField className='demo-form' id="outlined-basic" label={labelName} variant="outlined" />
            </form>
        </div>
    )
}

FormFieldOutlined.defaultProps = {
    labelName: "Name Here"
}
