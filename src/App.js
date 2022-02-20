import React from 'react';
import { CssBaseline, Grid } from '@material-ui/core';

import { getPlacesData } from './api/travelAdvisorAPI';
import Header from './components/Header/Header';
import List from './components/List/Map';
import Map from './components/Map/Map';
import PlaceDetails from './components/PlaceDetails/PlaceDetails';
import { WidgetsTwoTone } from '@material-ui/icons';



const App = () => {
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
