import React from 'react';
import Landing from '../../ui/landing/landing';
import HeaderComponent from '../header/HeaderComponent';
import ContentSection from '../content/ContentSection';
import { Button, Container, CssBaseline, Box } from '@material-ui/core';

class MainWrapper extends React.Component {
    render(): JSX.Element {
        return (
            <>
                <CssBaseline />

                <HeaderComponent />
                <Landing />
                <ContentSection />
            </>
        );
    }
}

export default MainWrapper;
