import React, { useState } from 'react';
import fetch from 'isomorphic-unfetch'
import ZipResponse from '../components/ZipResponse';
import Zip from '../components/Zip';
import map from '../components/map';

function AppContainer(props) {

    const [responseData, setResponseData] = useState('');
    const [responseGData, setResponseGData] = useState('');

    const handleChange = () =>{
    	handlerZipChange;
    	handlerGeoChange;
    }
    const handleZipChange = async (zipValue) => {
        //console.log(`--------- fetchData called zip:${zipValue}`)
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?appid=6b7b471967dd0851d0010cdecf28f829&units=metrics&q=${zipValue},nz`)
        const json = await res.json()
        //console.log(json);
        setResponseData(json);
    }
    
    const handleGeoChange = async (zipValue) => {
        //console.log(`--------- fetchData called zip:${zipValue}`)
        const resG = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${zipValue}.json?country=NZ&access_token=pk.eyJ1Ijoic2hhYW5uYWdyYSIsImEiOiJja2IxbmdrbjQwMm96MnhsMGh1MHJ1Z3hyIn0.QHXOou-etd4WcPqJKP0nNw`)
        const jsonG = await resG.json()
        //console.log(json);
        setResponseGData(jsonG);
    }
    
    const clearResponse = () => {
        setResponseData('');
        setResponseGData('');
    }

    return (
        <div>
            <div className="row mt-4">
                <div className="col-sm-4"></div>
                <Zip onZipChange={handleChange} clearResponse={clearResponse}/>
                <div className="col-sm-4"></div>
            </div>
            <div className="row mt-4">
                <div className="col-sm-2"></div>
                <ZipResponse responseData={responseData} clearResponse={clearResponse}/>
                <div className="col-sm-2"></div>
            </div>
            <div className="row mt-4">
                <div className="col-sm-2"></div>
                <map responseGData={responseGData} clearResponse={clearResponse}/>
                <div className="col-sm-2"></div>
            </div>    
        </div>
    );
}
  
export default AppContainer
