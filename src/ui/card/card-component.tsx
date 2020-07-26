import { makeStyles, Typography, Card, CardActionArea, CardMedia, CardContent } from '@material-ui/core';
import React from 'react';
import { DialogComponent } from '../dialog-component/dialog-component';

interface ICardComponentProps {
    text: string;
    secondaryText?: string;
    imgUrl: string;
    children?: React.ReactNode;
}

export const CardComponent: React.FC<ICardComponentProps> = (props: ICardComponentProps) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Card onClick={handleClickOpen}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="220px"
                        image={props.imgUrl}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.text}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {props.secondaryText}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            {open && <DialogComponent isOpen={open} onClose={handleClose} pageId={67} />}
        </>
    );
};
