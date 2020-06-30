import React from 'react';
import Button from '../button/button';
import Separator from '../separator/separator';
import Video from '../../../src/assets/fight-another-day.mp4';

class Landing extends React.Component {
    render() {
        return (
            <>
                <video autoPlay muted loop id="landing-video">
                    <source src={Video} type="video/mp4" />
                    Your browser does not support HTML5 video.
                </video>
                <section id="landing" className="landing">
                    <div className="content">
                        <h1>
                            <span className="landing-title">
                                MTÜ Turvaline Võrumaa eesmärgiks on arendada ja aktiviseerida vabatahtlike tegevust Võrumaal,
                                tagamaks liiklusohutust, teostamaks maastikuotsinguid ja suurendamaks turvalisust avalikus
                                ruumis.
                            </span>
                        </h1>
                        <Separator />
                        <Separator />
                        <Button label="Tutvu tegevustega" url="#activities" icon="angle-right" />
                    </div>
                </section>
            </>
        );
    }
}

export default Landing;
