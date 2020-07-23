import React from 'react';
import { makeStyles, Button, Typography, Box, Icon, Container } from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

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
                            <Box mb={2}>
                                MTÜ Turvaline Võrumaa eesmärgiks on arendada ja aktiviseerida vabatahtlike tegevust
                                Võrumaal, tagamaks liiklusohutust, teostamaks maastikuotsinguid ja suurendamaks
                                turvalisust avalikus ruumis.
                            </Box>
                            <Button variant="contained" size="large" endIcon={<ArrowDownwardIcon />} href="#activities">
                                Vaata lähemalt
                            </Button>
                        </Box>
                    </Container>
                </div>
            </section>
        </div>
    );
}
