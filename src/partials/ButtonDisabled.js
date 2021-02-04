import React from 'react'
import Button from '@material-ui/core/Button';

export default function ButtonDisabled({title}) {
    return (
        <div>
            <Button disabled variant="contained" color="primary" disableElevation>
                {title}
            </Button>
        </div>
    )
}

ButtonDisabled.defaultProps = {
    title : "2. Move Resources"
}

