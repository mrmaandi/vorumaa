import { Accordion, AccordionDetails, AccordionSummary, makeStyles, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from 'react';

interface ICollapseTriggerProps {
    text: string;
    secondaryText?: string;
    children?: React.ReactNode;
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
}));

export const Collapsible: React.FC<ICollapseTriggerProps> = (props: ICollapseTriggerProps) => {
    const classes = useStyles();

    return (
        <>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
                    <Typography className={classes.heading}>{props.text}</Typography>
                    <Typography className={classes.secondaryHeading}>{props.secondaryText}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>{props.children}</Typography>
                </AccordionDetails>
            </Accordion>
        </>
    );
};
