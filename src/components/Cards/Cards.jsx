import React from 'react';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import cx from 'classnames';
import styles from './Cards.module.css';

const Cards = ({data:{cases,deaths,recovered}}) =>{

    return(
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">Real Date</Typography>
                        <Typography variant="body2">{cases}</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.deaths)}>
                    <CardContent>
                        <Typography>Deaths</Typography>
                        <Typography>Real Date</Typography>
                        <Typography>{deaths}</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.recovered)}>
                    <CardContent>
                        <Typography>Recovered</Typography>
                        <Typography>Real Date</Typography>
                        <Typography>{recovered}</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;