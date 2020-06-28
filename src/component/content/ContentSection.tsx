import React from 'react';
import Section from '../../ui/section/section';
import Collapse from '../../ui/collapse/collapse';
import Separator from '../../ui/separator/separator';
import Table from '../../ui/table/table';
import Grid from '../../ui/grid/grid';
import GridColumn from '../../ui/grid/grid-column';
import Partner1 from '../../assets/partner-1.png';
import Partner2 from '../../assets/partner-2.png';

class ContentSection extends React.Component {
    render() {
        return (
            <div className="container">
                {this.renderActivitiesSection()}
                {this.renderAccomplishmentsSection()}
                {this.renderContacts()}
                {this.renderPartners()}
                {this.renderFooter()}
            </div>
        );
    }

    private renderActivitiesSection() {
        return (
            <Section id="activities" title="Käesolevad tegevused">
                <p>
                    Võrumaa noorte kaasamine turvalise kogukonnaelu suurendamiseks. Projekt viiakse läbi ajavahemikul
                    1.02.2018 kuni 30.10.2020. Peale seda hinnatakse saavutatut ja vajadusel jätkatakse samalaadse
                    projektiga. Projekt on kooskõlas Võrumaa Partnerluskogu meetme eesmärgiga. Võrumaa noored osalevad
                    aktiivselt ja oskuslikult oma kogukonnaelu turvalisuse suurendamise eesmärgi nimel aidates kaasa
                    kogukondade aktiivsusele läbi kogemuste ja ühistegevuse. Projekt võimaldab väärtustada noorte
                    suhtumist kogukonda ja pakub võimalust kogukonnaellu panustada. Tulenevalt Võru maakonna
                    arendusarendusstrateegia 2014 – 2025 väljakutsetest, baasressurssidest ja väärtustest on püstitatud
                    visioon aastaks 2025: Võrumaa on atraktiivne Kagu-Eesti elu- ja töökeskkond, mida iseloomustab tugev
                    majandus, konkurentsivõimeline haridus, oma kultuur ja eripära, kaasaegne tervishoid ja
                    sotsiaalhoolekanne ning kaasav ja kestlik kogukond. Visioonist lähtuvalt on Võrumaal mõnedeks
                    eesmärkideks: Võrumaa on koht, kus inimesed elavad täisväärtuslikult ja kaua (kaasaegne tervishoid
                    ja sotsiaalhoolekanne); Võrumaalased on tugeva ja nakatava piirkondliku enesetunnetusega (kaasav ja
                    kestlik kogukond).
                </p>
                <Separator small />
                <Collapse text="Rohkem infot">
                    Kogukonna valdkondlikeks fookusteks on tulenevalt hetkeolukorra ja SWOT-analüüsist hajaasustuse ja
                    maakonna keskuse arendamine, noortele mitmekesiste arenguvõimaluste loomine – pakub võimalust oma
                    vaba aega sisukalt veeta ning seob neid tihedamalt kodukohaga; kogukondlike koostöövõrgustike
                    arendamine – kindlustab koostöö edenemise piirkonnas ning aitab kaasa kohaliku identiteedi
                    tugevnemisele.
                    <br />
                    <br />
                    Projekti eesmärk:
                    <br />
                    Anda läbi teoreetiliste koolituste ja praktiliste harjutuste kogukonna noortele teadmisi ja oskusi
                    maastikul inimeste otsimiseks, esmaabi andmiseks, koostööks politsei ja teiste
                    operatiivstruktuuridega. Tõsta kogukonna teadlikust ja anda teadmisi ning oskusi ise oma kogukonna
                    hüvanguks turvalisuse loomiseks läbi koolituste. Koolituste eesmärgiks on anda teadmisi oma vara
                    kaitseks, turvaliste kogukondlike ürituste ja spordivõistluste korraldamiseks, internetiohtude
                    äratundmiseks ja vältimiseks, ohutuks liiklemiseks, meelemürkide kahjulikkusest, radikaliseerumise
                    märkamiseks ja ennetamiseks.
                    <br />
                    <br />
                    <Table />
                </Collapse>
            </Section>
        );
    }

    private renderAccomplishmentsSection() {
        return (
            <Section id="accomplishments" title="Saavutused" theme="gray">
                <p>
                    MTÜ Turvaline Võrumaa loodi 2. mail 2016. Septembrini 2016 tegelesime turvalisusprobleemide
                    kaardistamisega, mille lahendamisel saavad vabatahtlikud ise oma kogukonnas palju ära teha. Kohtutud
                    ja vesteldud on erinevate spordiühingutega ning vabatahtlikega, kes soovivad oma panuse anda.
                    Septembris 2016 alustasime projektide kirjutamist KOP (kohaliku omaalgatuse programm) programmi
                    toetuste saamiseks reguleerija koolituse finantseerimiseks ja abipolitseinikele taskulampide
                    soetamiseks. Jaanuaris 2017 soetasime 3000 helkurit, mida vabatahtlikud jagasid isikutele, kel
                    helkur puudus ja kes pimedal ajal võisid ohtu sattuda. Vabatahtlike abiga helkurite jagamisega
                    edenes kogukonna algatus turvalise elukeskkonna loomisel, kuna vabatahtlikud said ise midagi ära
                    teha oma kogukonnas turvalisuse loomisel. 27-28.01.2017 korraldasime 15 vabatahtlikule, kes vabast
                    tahtest ja tasu saamata soovivad oma kogukonna turvalisuse nimel tegeleda liiklusohutuse tagamisega
                    Võru maakonnas, reguleerija III astme pädevuskoolituse. Koolitus vastas Liiklusseaduse nõuetele.
                    Neid vabatahtlikke on võimalik kaasata erinevatele üritustele liikluse reguleerija või kasvõi
                    parklakorraldajana. Huvi korral võtke meiega ühendust.
                </p>
                <Separator small />
                <Collapse text="Rohkem infot">
                    <p>
                        Meist kirjutati ka kohalikus meedias:{' '}
                        <a href="http://www.lounaleht.ee/index.php?page=1&amp;id=21263">
                            http://www.lounaleht.ee/index.php?page=1&amp;id=21263
                        </a>
                    </p>
                    <p>
                        Kuna esimesel korral ei õnnestunud taskulampide soetamiseks toetust saada, siis esitasime KÜSK-i
                        (kodanikuühiskonna sihtkapital) uue taotluse, mis ka rahuldati. 27. juulil 2017 andsime lambid
                        üle Lõuna prefektuuri Võru abipolitseinike rühmajuhile. Samal päeval allkirjastasime
                        koostöökokkuleppe Lõuna prefetuuriga. Ka sel korral tundis meedia meie vastu huvi:{' '}
                        <a href="https://lounaeestlane.ee/vorumaa-abipolitseinikud-varustati-taskulampidega/">
                            https://lounaeestlane.ee/vorumaa-abipolitseinikud-varustati-taskulampidega/
                        </a>
                    </p>
                    <p>
                        30.08.2017 toimus koostöös politseiga ennetusliku sisuga vigursõidu võistlus algajatele
                        autojuhtidele „See pole mingi põlluralli“. Algajatel tuli end proovile panna Liiklustesti
                        lahendamises, vigursõidus, autoratta vahetuses ja rallikaga kihutamises. Selle kohta võib lugeda
                        ka:&nbsp;
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
                    <p className="x_MsoNormal">
                        <strong>
                            Liitusime eeskujukampaaniaga AGA MINA. Meie sõnum on: Aga mina oskan otsida eksinut.
                        </strong>
                    </p>
                    <p className="x_MsoNormal">
                        5-7 märts 2018 toimusid Võrumaal kokku neljas koolis sissejuhatavad koolitused
                        maastikuotsinguteks. Kokku oli nõus vabatahtlikuna maastikuotsingutel osalema 121 koolinoort.
                    </p>
                    <p className="x_MsoNormal">
                        Põhikoolitused koos praktiliste harjutustega saavad toimuma suvekuudel.
                    </p>
                    <p>
                        Kui sul on võimalus rahaliselt toetada vabatahtlike tegevust või aidata projektide läbiviimiseks
                        vajaliku omafinantseeringu saavutamist, siis saad selle kanda MTÜ Turvaline Võrumaa
                        arveldusarvele EE034204278607433303 COOP Pank.
                    </p>
                </Collapse>
            </Section>
        );
    }

    private renderContacts() {
        return (
            <Section id="contacts" title="Võta ühendust" theme="blue">
                <p>
                    Kui sa tunned, et sul on tahtmist ise midagi ära teha turvalisuse loomisel, siis võta meiega
                    ühendust. <b>kontakt@turvalinevõrumaa.ee</b>
                </p>
                <br />

                <h1>Tegevjuht</h1>
                <p>Varbo Maandi, 58133696, varbo.maandi@politsei.ee</p>
                <br />

                <h1>Juhatuse esimees</h1>
                <p>Enn Meitern, 5056605, enn@emerpen.ee</p>
                <br />

                <h1>Juhatuse liikmed</h1>
                <p>Raul Kell, 5032062, raul@vorumaaautokool.ee</p>
                <p>Tiit Tõnts, 5156105, tiit.tonts007@gmail.com</p>
            </Section>
        );
    }

    private renderPartners() {
        return (
            <Section id="partners" title="Toetajad">
                <Grid>
                    <GridColumn>
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
                    </GridColumn>
                    <GridColumn>
                        <img src={Partner1} width="400"/><br/>
                        <img src={Partner2} width="400"/>
                    </GridColumn>
                </Grid>
            </Section>
        );
    }

    private renderFooter() {
        return (
            <Section id="footer" theme="gray">
                <p>
                    MTÜ Turvaline Võrumaa
                    <br />
                    registrikood 80401121
                    <br />
                    Räpina mnt 1a, Võru linn, Võru maakond, 65606
                    <br />
                    Arveldusarve: EE034204278607433303 COOP Pank
                    <br />
                </p>
            </Section>
        );
    }
}

export default ContentSection;
