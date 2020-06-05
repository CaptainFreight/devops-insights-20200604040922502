import React, { useState } from 'react';

function Zip(props) {

    const [validationError, setValidationError] = useState(null);

    const validate = (event) => {
    	//get all that contain letters both lower and upper and or whitespace one or many times
        const zipCodePattern = /^[a-zA-Z\s]+$/;
        const valid = zipCodePattern.test(event.target.value);
        if (!valid) {
            setValidationError('please provide valid city name for nz');
            props.clearResponse();
        } else {
            setValidationError('');
            props.onZipChange(event.target.value);
        }
    };

    return (
        <div className="col-sm-4">
            <div className="row">
                <div className="col-sm-10">
                    <style jsx="true">{`
                        .form-control::-webkit-input-placeholder {
                            color: #ddd;
                        }
                    `}
                    </style>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="usr" 
                        placeholder="NZ city name"
                        onKeyPress={(event) => {
                            if (event.key === "Enter") {
                                validate(event);
                            }
                        }}
                    ></input>   
                </div>
            </div>
            <div className="pl-3 row">
                <div className="text-danger small"> { validationError }</div>
            </div>
        </div>
    );
}

export default Zip