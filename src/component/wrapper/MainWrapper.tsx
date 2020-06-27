import React from 'react';
import Landing from '../../ui/landing/landing';
import HeaderComponent from '../header/HeaderComponent';
import ContentSection from '../content/ContentSection';

class MainWrapper extends React.Component {
    render() {
        return (
            <>
                <HeaderComponent />
                <div className="wrapper">
                    <ContentSection />
                    <Landing />
                </div>
            </>
        );
    }
}

export default MainWrapper;
