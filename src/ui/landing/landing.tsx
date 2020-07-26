import React from 'react';
import { makeStyles, Button, Typography, Box, Icon, Container, Grid } from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { CardComponent } from '../../ui/card/card-component';

const useStyles = makeStyles(() => ({
    root: {
        // border: '2px solid red',
        // flex: '1 1 auto',
        // height:"calc(100% - 32px)" //height of toolbar if you know it beforehand
    },
}));

export default function Landing(): JSX.Element {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <section id="landing" className="landing">
                <div className="content">
                    <Container maxWidth="lg">
                        <Box fontWeight="fontWeightLight" fontSize={22}>
                            <Box>
                                MTÜ Turvaline Võrumaa eesmärgiks on arendada ja aktiviseerida vabatahtlike tegevust
                                Võrumaal, tagamaks liiklusohutust, teostamaks maastikuotsinguid ja suurendamaks
                                turvalisust avalikus ruumis.
                            </Box>
                            <Box mt={4}>
                                <Button
                                    variant="contained"
                                    size="large"
                                    endIcon={<ArrowDownwardIcon />}
                                    href="#activities"
                                >
                                    Vaata lähemalt
                                </Button>
                            </Box>
                        </Box>
                    </Container>
                </div>
                <Container maxWidth="lg">
                    <Grid container>
                        <Grid item xs={12} justify="center" alignItems="center">
                            <Grid container spacing={4} direction="row" alignItems="center" justify="center">
                                <Grid item md={6} sm={12}>
                                    <CardComponent
                                        text="Maastikuotsingu õppus Abrukal"
                                        secondaryText="24.-26 juulil korraldatud maastikuotsingu koolitus Abruka saarel"
                                        imgUrl="https://i.imgur.com/7iuQJYz.png"
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </div>
    );
}
