import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@material-ui/core';
import React, { useEffect, useState, useRef } from 'react';

interface IDialogComponentProps {
    isOpen: boolean;
    text: string;
    secondaryText: string;
    onClose: () => void;
    children?: React.ReactNode;
}

export const DialogComponent: React.FC<IDialogComponentProps> = (props: IDialogComponentProps) => {
    return (
        <Dialog
            maxWidth="lg"
            open={props.isOpen}
            onClose={() => props.onClose()}
            aria-labelledby="max-width-dialog-title"
        >
            <>
                <DialogTitle id="max-width-dialog-title">{props.text}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <div dangerouslySetInnerHTML={{ __html: props.secondaryText }} />
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => props.onClose()} color="primary">
                        Sulge
                    </Button>
                </DialogActions>
            </>
        </Dialog>
    );
};
