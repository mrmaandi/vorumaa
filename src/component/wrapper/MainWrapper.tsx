import React from 'react';
import Landing from '../../ui/landing/landing';
import HeaderComponent from '../header/HeaderComponent';
import ContentSection from '../content/ContentSection';
import { CssBaseline } from '@material-ui/core';

class MainWrapper extends React.Component {
    render(): JSX.Element {
        return (
            <>
                <CssBaseline />
                <HeaderComponent />
                <div className="main-wrapper">
                    <Landing />
                    <ContentSection />
                </div>
            </>
        );
    }
}

export default MainWrapper;
