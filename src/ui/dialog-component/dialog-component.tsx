import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@material-ui/core';
import React, { useEffect, useState, useRef } from 'react';

interface IDialogComponentProps {
    isOpen: boolean;
    onClose: () => void;
    pageId: number;
    children?: React.ReactNode;
}

export const DialogComponent: React.FC<IDialogComponentProps> = (props: IDialogComponentProps) => {
    const [data, setData] = useState(null as any);

    useEffect(() => {
        fetch('https://public-api.wordpress.com/wp/v2/sites/turvalinevorumaa.wordpress.com/pages/' + props.pageId)
            .then((data) => data.json())
            .then((json) => setData(json));
    }, []);

    return (
        <Dialog
            maxWidth="lg"
            open={props.isOpen}
            onClose={() => props.onClose()}
            aria-labelledby="max-width-dialog-title"
        >
            <>
                {data && (
                    <>
                        <DialogTitle id="max-width-dialog-title">{data.title.rendered}</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                <div dangerouslySetInnerHTML={{ __html: data.content.rendered }} />
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={() => props.onClose()} color="primary">
                                Sulge
                            </Button>
                        </DialogActions>
                    </>
                )}
            </>
        </Dialog>
    );
};
