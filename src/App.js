import React, { useState, useEffect } from 'react';
import { CssBaseline, Grid } from '@material-ui/core';

import { getPlacesData } from './api/travelAdvisorAPI';
import Header from './components/Header/Header';
import List from './components/List/Map';
import Map from './components/Map/Map';
import PlaceDetails from './components/PlaceDetails/PlaceDetails';
import { WidgetsTwoTone } from '@material-ui/icons';



const App = () => {
    const [places, setPlaces] = useState([]);
    useEffect(() => {
        getPlacesData()
            .then((data) => {
                console.log(data);
                setPlaces(data);
	    
	        })
    },[]);
	

    return (
        <>
            <CssBaseline/>
            <Header/>
            <Grid container spacing={3} style={ {width: '100%'} }>
                <Grid item xs={12} md={4}>
                    <List/>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map/>   
                </Grid>
            </Grid>
        </>
    );
}

export default App;
