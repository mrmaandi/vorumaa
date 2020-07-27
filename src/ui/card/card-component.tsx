import {
    makeStyles,
    Typography,
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Theme,
    createStyles,
    IconButton,
    useTheme,
} from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { DialogComponent } from '../dialog-component/dialog-component';

interface ICardComponentProps {
    imgUrl: string;
    url?: string;
    children?: React.ReactNode;
    pageId: number;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        details: {
            display: 'flex',
            flexDirection: 'column',
        },
        content: {
            flex: '1 0 auto',
        },
        cover: {
            width: 300,
        },
    }),
);

export const CardComponent: React.FC<ICardComponentProps> = (props: ICardComponentProps) => {
    const [open, setOpen] = React.useState(false);

    const [data, setData] = useState(null as any);

    useEffect(() => {
        fetch('https://public-api.wordpress.com/wp/v2/sites/turvalinevorumaa.wordpress.com/pages/' + props.pageId)
            .then((data) => data.json())
            .then((json) => setData(json));
    }, []);

    const classes = useStyles();
    const theme = useTheme();

    const handleClickOpen = () => {
        props.url ? window.location.assign(props.url) : setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            {data && (
                <Card className={classes.root} onClick={handleClickOpen}>
                    <CardActionArea>
                        <div className={classes.details}>
                            <CardContent className={classes.content}>
                                <Typography component="h5" variant="h5">
                                    {data.title.rendered}
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary">
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: data.excerpt.rendered.slice(0, 200),
                                        }}
                                    />
                                </Typography>
                            </CardContent>
                        </div>
                    </CardActionArea>
                    <CardMedia className={classes.cover} image={props.imgUrl} title="" />
                </Card>
            )}

            {open && (
                <DialogComponent
                    isOpen={open}
                    onClose={handleClose}
                    text={data.title.rendered}
                    secondaryText={data.content.rendered}
                />
            )}
        </>
    );
};
