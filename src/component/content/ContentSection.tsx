import React from 'react';
import Section from '../../ui/section/section';
import Separator from '../../ui/separator/separator';
import Table from '../../ui/table/table';
import Partner1 from '../../assets/partner-1.png';
import Partner2 from '../../assets/partner-2.png';
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

class ContentSection extends React.Component {
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
        return (
            <div className={this.getTheme('white')}>
                <Container maxWidth="md">
                    <Section id="activities" title="Käesolevad tegevused">
                        <Typography variant="body1" align="justify" gutterBottom>
                            <BoxContent>
                                Võrumaa noorte kaasamine turvalise kogukonnaelu suurendamiseks. Projekt viiakse läbi
                                ajavahemikul 1.02.2018 kuni 30.10.2020. Peale seda hinnatakse saavutatut ja vajadusel
                                jätkatakse samalaadse projektiga. Projekt on kooskõlas Võrumaa Partnerluskogu meetme
                                eesmärgiga. Võrumaa noored osalevad aktiivselt ja oskuslikult oma kogukonnaelu
                                turvalisuse suurendamise eesmärgi nimel aidates kaasa kogukondade aktiivsusele läbi
                                kogemuste ja ühistegevuse. Projekt võimaldab väärtustada noorte suhtumist kogukonda ja
                                pakub võimalust kogukonnaellu panustada. Tulenevalt Võru maakonna
                                arendusarendusstrateegia 2014 – 2025 väljakutsetest, baasressurssidest ja väärtustest on
                                püstitatud visioon aastaks 2025: Võrumaa on atraktiivne Kagu-Eesti elu- ja töökeskkond,
                                mida iseloomustab tugev majandus, konkurentsivõimeline haridus, oma kultuur ja eripära,
                                kaasaegne tervishoid ja sotsiaalhoolekanne ning kaasav ja kestlik kogukond. Visioonist
                                lähtuvalt on Võrumaal mõnedeks eesmärkideks: Võrumaa on koht, kus inimesed elavad
                                täisväärtuslikult ja kaua (kaasaegne tervishoid ja sotsiaalhoolekanne); Võrumaalased on
                                tugeva ja nakatava piirkondliku enesetunnetusega (kaasav ja kestlik kogukond).
                            </BoxContent>
                        </Typography>
                        <Collapsible text="Rohkem infot">
                            <Typography variant="body1" align="justify" gutterBottom>
                                <BoxContent>
                                    Kogukonna valdkondlikeks fookusteks on tulenevalt hetkeolukorra ja SWOT-analüüsist
                                    hajaasustuse ja maakonna keskuse arendamine, noortele mitmekesiste arenguvõimaluste
                                    loomine – pakub võimalust oma vaba aega sisukalt veeta ning seob neid tihedamalt
                                    kodukohaga; kogukondlike koostöövõrgustike arendamine – kindlustab koostöö edenemise
                                    piirkonnas ning aitab kaasa kohaliku identiteedi tugevnemisele.
                                    <br />
                                    <br />
                                    Projekti eesmärk:
                                    <br />
                                    Anda läbi teoreetiliste koolituste ja praktiliste harjutuste kogukonna noortele
                                    teadmisi ja oskusi maastikul inimeste otsimiseks, esmaabi andmiseks, koostööks
                                    politsei ja teiste operatiivstruktuuridega. Tõsta kogukonna teadlikust ja anda
                                    teadmisi ning oskusi ise oma kogukonna hüvanguks turvalisuse loomiseks läbi
                                    koolituste. Koolituste eesmärgiks on anda teadmisi oma vara kaitseks, turvaliste
                                    kogukondlike ürituste ja spordivõistluste korraldamiseks, internetiohtude
                                    äratundmiseks ja vältimiseks, ohutuks liiklemiseks, meelemürkide kahjulikkusest,
                                    radikaliseerumise märkamiseks ja ennetamiseks.
                                    <br />
                                    <br />
                                </BoxContent>
                            </Typography>
                            <Table />
                        </Collapsible>
                    </Section>
                </Container>
            </div>
        );
    }

    private renderAccomplishmentsSection() {
        return (
            <div className={this.getTheme('gray')}>
                <Container maxWidth="md">
                    <Section id="accomplishments" title="Saavutused">
                        <Typography variant="body1" align="justify" gutterBottom>
                            <BoxContent>
                                MTÜ Turvaline Võrumaa loodi 2. mail 2016. Septembrini 2016 tegelesime
                                turvalisusprobleemide kaardistamisega, mille lahendamisel saavad vabatahtlikud ise oma
                                kogukonnas palju ära teha. Kohtutud ja vesteldud on erinevate spordiühingutega ning
                                vabatahtlikega, kes soovivad oma panuse anda. Septembris 2016 alustasime projektide
                                kirjutamist KOP (kohaliku omaalgatuse programm) programmi toetuste saamiseks reguleerija
                                koolituse finantseerimiseks ja abipolitseinikele taskulampide soetamiseks. Jaanuaris
                                2017 soetasime 3000 helkurit, mida vabatahtlikud jagasid isikutele, kel helkur puudus ja
                                kes pimedal ajal võisid ohtu sattuda. Vabatahtlike abiga helkurite jagamisega edenes
                                kogukonna algatus turvalise elukeskkonna loomisel, kuna vabatahtlikud said ise midagi
                                ära teha oma kogukonnas turvalisuse loomisel. 27-28.01.2017 korraldasime 15
                                vabatahtlikule, kes vabast tahtest ja tasu saamata soovivad oma kogukonna turvalisuse
                                nimel tegeleda liiklusohutuse tagamisega Võru maakonnas, reguleerija III astme
                                pädevuskoolituse. Koolitus vastas Liiklusseaduse nõuetele. Neid vabatahtlikke on
                                võimalik kaasata erinevatele üritustele liikluse reguleerija või kasvõi
                                parklakorraldajana. Huvi korral võtke meiega ühendust.
                            </BoxContent>
                        </Typography>
                        <Separator small />
                        <Collapsible text="Rohkem infot">
                            <BoxContent>
                                <p>
                                    Meist kirjutati ka kohalikus meedias:{' '}
                                    <a href="http://www.lounaleht.ee/index.php?page=1&amp;id=21263">
                                        http://www.lounaleht.ee/index.php?page=1&amp;id=21263
                                    </a>
                                </p>
                                <p>
                                    Kuna esimesel korral ei õnnestunud taskulampide soetamiseks toetust saada, siis
                                    esitasime KÜSK-i (kodanikuühiskonna sihtkapital) uue taotluse, mis ka rahuldati. 27.
                                    juulil 2017 andsime lambid üle Lõuna prefektuuri Võru abipolitseinike rühmajuhile.
                                    Samal päeval allkirjastasime koostöökokkuleppe Lõuna prefetuuriga. Ka sel korral
                                    tundis meedia meie vastu huvi:{' '}
                                    <a href="https://lounaeestlane.ee/vorumaa-abipolitseinikud-varustati-taskulampidega/">
                                        https://lounaeestlane.ee/vorumaa-abipolitseinikud-varustati-taskulampidega/
                                    </a>
                                </p>
                                <p>
                                    30.08.2017 toimus koostöös politseiga ennetusliku sisuga vigursõidu võistlus
                                    algajatele autojuhtidele „See pole mingi põlluralli“. Algajatel tuli end proovile
                                    panna Liiklustesti lahendamises, vigursõidus, autoratta vahetuses ja rallikaga
                                    kihutamises. Selle kohta võib lugeda ka:&nbsp;
                                    <a
                                        href="http://www.lounaleht.ee/?page=1&amp;id=22439"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        http://www.lounaleht.ee/?page=1&amp;id=22439
                                    </a>
                                    &nbsp;või&nbsp;
                                    <a
                                        href="https://lounaeestlane.ee/algajad-autojuhid-said-vorus-proovida-oma-soiduoskusi/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        https://lounaeestlane.ee/algajad-autojuhid-said-vorus-proovida-oma-soiduoskusi/
                                    </a>
                                </p>
                                <p>
                                    <strong>
                                        Liitusime eeskujukampaaniaga AGA MINA. Meie sõnum on: Aga mina oskan otsida
                                        eksinut.
                                    </strong>
                                </p>
                                <p>
                                    5-7 märts 2018 toimusid Võrumaal kokku neljas koolis sissejuhatavad koolitused
                                    maastikuotsinguteks. Kokku oli nõus vabatahtlikuna maastikuotsingutel osalema 121
                                    koolinoort.
                                </p>
                                <p>Põhikoolitused koos praktiliste harjutustega saavad toimuma suvekuudel.</p>
                                <p>
                                    Kui sul on võimalus rahaliselt toetada vabatahtlike tegevust või aidata projektide
                                    läbiviimiseks vajaliku omafinantseeringu saavutamist, siis saad selle kanda MTÜ
                                    Turvaline Võrumaa arveldusarvele EE034204278607433303 COOP Pank.
                                </p>
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
