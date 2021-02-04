import React from 'react'
import './textInputField.css';

export default function textInputField({labelTitle}) {
    return (
        <div>
            <form>
                <label>
                    {labelTitle}
                    <input type="text" name={labelTitle} placeholder={labelTitle}/>
                </label>
            </form>
            <Form.Group controlId="formGroupPassword" >
                      <Form.Label className='font-weight-light formLabel'>Password</Form.Label>
                      <Form.Control type="password" placeholder="********" />
            </Form.Group>
        </div>
    )
}
textInputField.defaultProp = {
    labelTitle : 'Name',
}
