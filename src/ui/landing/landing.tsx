import React from 'react';
import Button from '../button/button';
import Separator from '../separator/separator';

class Landing extends React.Component {
    render() {
        return (
            <section id="landing" className="landing">
                <div className="content">
                    <h1>
                        MTÜ Turvaline Võrumaa eesmärgiks on arendada ja aktiviseerida vabatahtlike tegevust Võrumaal,
                        tagamaks liiklusohutust, teostamaks maastikuotsinguid ja suurendamaks turvalisust avalikus
                        ruumis.
                    </h1>
                    <Separator />
                    <Button label="Tutvu tegevustega" url="#activities" />
                </div>
            </section>
        );
    }
}

export default Landing;
