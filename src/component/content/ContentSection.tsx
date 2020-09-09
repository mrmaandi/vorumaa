import React from 'react';
import Section from '../../ui/section/section';
import Separator from '../../ui/separator/separator';
import Table from '../../ui/table/table';
import Partner1 from '../../assets/partner-1.png';
import Partner2 from '../../assets/partner-2.png';
import Partner3 from '../../assets/partner-3.png';
import { Typography, Container, Grid, Box } from '@material-ui/core';
import { Collapsible } from '../../ui/collapse/collapsible';

type Theme = 'gray' | 'white' | 'blue';

interface IBoxContent {
    children: any;
}

const BoxContent: React.FC<IBoxContent> = (props: IBoxContent) => {
    return (
        <Box lineHeight={2} fontWeight="fontWeightLight" fontSize={18}>
            {props.children}
        </Box>
    );
};

interface IContentSectionState {
    activities: any;
    accomplishments: any;
}

class ContentSection extends React.Component<{}, IContentSectionState> {
    constructor(props: any) {
        super(props);

        this.state = {
            activities: null,
            accomplishments: null,
        };
    }

    componentDidMount(): void {
        fetch('https://public-api.wordpress.com/wp/v2/sites/turvalinevorumaa.wordpress.com/pages/50')
            .then((accomplishments) => accomplishments.json())
            .then((json) => this.setState({ accomplishments: json }));

        fetch('https://public-api.wordpress.com/wp/v2/sites/turvalinevorumaa.wordpress.com/pages/31')
            .then((activities) => activities.json())
            .then((json) => this.setState({ activities: json }));
    }

    render(): JSX.Element {
        return (
            <>
                {this.renderActivitiesSection()}
                {this.renderAccomplishmentsSection()}
                {this.renderContacts()}
                {this.renderPartners()}
                {this.renderFooter()}
            </>
        );
    }

    private renderActivitiesSection() {
        const data = this.state.activities;

        if (!data) {
            return null;
        }

        const title = data.title.rendered;
        const content = data.content.rendered;

        const contentRegex = /\[content\]([\s\S]*?)\[\/content\]/g;
        const collapseRegex = /\[collapse\]([\s\S]*?)\[\/collapse\]/g;

        const contentBody = contentRegex.exec(content);
        const collapseBody = collapseRegex.exec(content);

        return (
            <div className={this.getTheme('white')}>
                <Container maxWidth="md">
                    <Section id="activities" title={title}>
                        <Typography variant="body1" align="justify" gutterBottom>
                            <BoxContent>
                                <div dangerouslySetInnerHTML={{ __html: contentBody ? contentBody[1] : '' }} />
                            </BoxContent>
                        </Typography>
                        <Collapsible text="Rohkem infot" secondaryText="Projekti eesmärk ja ajakava">
                            <Typography variant="body1" align="justify" gutterBottom>
                                <BoxContent>
                                    <div dangerouslySetInnerHTML={{ __html: collapseBody ? collapseBody[1] : '' }} />
                                </BoxContent>
                            </Typography>
                        </Collapsible>
                    </Section>
                </Container>
            </div>
        );
    }

    private renderAccomplishmentsSection() {
        const data = this.state.accomplishments;

        if (!data) {
            return null;
        }

        const title = data.title.rendered;
        const content = data.content.rendered;

        const contentRegex = /\[content\]([\s\S]*?)\[\/content\]/g;
        const collapseRegex = /\[collapse\]([\s\S]*?)\[\/collapse\]/g;

        const contentBody = contentRegex.exec(content);
        const collapseBody = collapseRegex.exec(content);

        return (
            <div className={this.getTheme('gray')}>
                <Container maxWidth="md">
                    <Section id="accomplishments" title={title}>
                        <Typography variant="body1" align="justify" gutterBottom>
                            <BoxContent>
                                <div dangerouslySetInnerHTML={{ __html: contentBody ? contentBody[1] : '' }} />
                            </BoxContent>
                        </Typography>
                        <Separator small />
                        <Collapsible text="Rohkem infot" secondaryText="MTÜ kajastus meedias ja AGA MINA">
                            <BoxContent>
                                <div dangerouslySetInnerHTML={{ __html: collapseBody ? collapseBody[1] : '' }} />
                            </BoxContent>
                        </Collapsible>
                    </Section>
                </Container>
            </div>
        );
    }

    private renderContacts() {
        return (
            <div className={this.getTheme('blue')}>
                <Container maxWidth="md">
                    <Section id="contacts" title="Võta ühendust">
                        <BoxContent>
                            <Typography variant="body1" align="justify" gutterBottom>
                                Kui sa tunned, et sul on tahtmist ise midagi ära teha turvalisuse loomisel, siis võta
                                meiega ühendust. <b>kontakt@turvalinevõrumaa.ee</b>
                            </Typography>
                            <Typography variant="h4" gutterBottom>
                                Tegevjuht
                            </Typography>
                            <Typography variant="body1" align="justify" gutterBottom>
                                Varbo Maandi, 58133696, varbo.maandi@politsei.ee
                            </Typography>
                            <Typography variant="h4" gutterBottom>
                                Juhatuse esimees
                            </Typography>
                            <Typography variant="body1" align="justify" gutterBottom>
                                Enn Meitern, 5056605, enn@emerpen.ee
                            </Typography>
                            <Typography variant="h4" gutterBottom>
                                Juhatuse liikmed
                            </Typography>
                            <Typography variant="body1" align="justify" gutterBottom>
                                <p>Raul Kell, 5032062, raul@vorumaaautokool.ee</p>
                                <p>Tiit Tõnts, 5156105, tiit.tonts007@gmail.com</p>
                            </Typography>
                        </BoxContent>
                    </Section>
                </Container>
            </div>
        );
    }

    private renderPartners() {
        return (
            <div className={this.getTheme('white')}>
                <Container maxWidth="md">
                    <Section id="partners" title="Toetajad">
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Grid container>
                                    <Grid item md={6}>
                                        <Box width={1}>
                                            <Typography variant="body1" align="justify" gutterBottom>
                                                Vabatahtlikke turvalisusloojate tegevust on toetanud
                                                <br />
                                                <br />
                                                Kodanikuühiskonna Sihtkapital
                                                <br />
                                                Andermi OÜ
                                                <br />
                                                Navi Külaselts MTÜ
                                                <br />
                                                Võru vallavalitsus
                                                <br />
                                                Haanja Rattaklubi
                                                <br />
                                                Antsla Vallavalitsus
                                                <br />
                                                Võru TÜ
                                                <br />
                                                Kaitseliidu Võrumaa malev
                                                <br />
                                                Lasva Vallavalitsus
                                                <br />
                                                Rõuge Vallavalitsus
                                                <br />
                                                Orienteerumisklubi Võru
                                                <br />
                                                Kauplus K-Rauta
                                                <br />
                                            </Typography>
                                            <br />
                                            <img src={Partner3} width="100%" height="100%" />
                                        </Box>
                                    </Grid>
                                    <Grid item justify="flex-end" md={6}>
                                        <Box width={1}>
                                            <img src={Partner1} width="100%" height="100%" />
                                            <br />
                                            <img src={Partner2} width="100%" height="100%" />
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Section>
                </Container>
            </div>
        );
    }

    private renderFooter() {
        return (
            <div className={this.getTheme('gray')}>
                <Container maxWidth="md">
                    <Section id="footer">
                        <Typography variant="body1" align="justify" gutterBottom>
                            MTÜ Turvaline Võrumaa
                            <br />
                            registrikood 80401121
                            <br />
                            Räpina mnt 1a, Võru linn, Võru maakond, 65606
                            <br />
                            Arveldusarve: EE034204278607433303 COOP Pank
                            <br />
                        </Typography>
                    </Section>
                </Container>
            </div>
        );
    }

    private getTheme(theme: Theme) {
        switch (theme) {
            case 'gray':
                return 'theme-gray';
            case 'white':
                return 'theme-white';
            case 'blue':
                return 'theme-blue';
            default:
                return 'theme-white';
        }
    }
}

export default ContentSection;
