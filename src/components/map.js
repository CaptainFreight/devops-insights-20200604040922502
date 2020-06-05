import React from 'react';
import fetch from 'isomorphic-unfetch';

function map(props) {
	    
	//const handleZipChange = async (zipValue) => {
    //const res = await fetch('pk.eyJ1Ijoic2hhYW5uYWdyYSIsImEiOiJja2IxbmdrbjQwMm96MnhsMGh1MHJ1Z3hyIn0.QHXOou-etd4WcPqJKP0nNw')
    //const json = await res.json()
    //console.log(json);
    //setResponseData(json);
    //}
    
    if(props.responseData === null || props.responseData === '') {
        return null;
    }

    if(props.responseData.cod === '400' || props.responseData.cod === '404') {   
        setTimeout(function() { props.clearResponse();}, 20000);
        return (
            <div className="col-sm-8">
                <div className="text-danger">"timeout"</div>
            </div>
        );
    }

    if(props.responseData.cod === 200) {
    	
        return (
            <div className="col-sm-8">
                <div className="text-danger">"it worked"</div>
                <div className="text-danger">{prop.responseGData.features[0].center}</div>
            </div>
        )
    }
    return null
}
  
export default map