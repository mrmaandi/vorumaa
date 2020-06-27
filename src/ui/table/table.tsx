import React from 'react';

interface ITableProps {
    small?: boolean;
}

class Table extends React.Component<ITableProps> {
    render() {
        return (
            <table>
                <tr>
                    <th>Ajakava</th>
                    <th>Tegevuse kirjeldus</th>
                </tr>
                <tr>
                    <td>01.veebruar – märts 2018</td>
                    <td>MTÜ Turvaline Võrumaa suhtleb koostööpartneritega, töötab välja tegevuskavad, võtab hinnapakkumised.</td>
                </tr>
                <tr>
                    <td>Mai 2018</td>
                    <td>Alustatakse maastikuotsingu I etapi koolituste ettevalmistamisega, tehakse kokkulepped koolitusi läbiviivate koolitajatega.</td>
                </tr>
                <tr>
                    <td>Juuni 2018</td>
                    <td>Tehakse kokkulepped maastikuotsingu koolituste läbiviimiseks vajalike ruumide kasutamiseks, koolitajate transpordi ja koolitusel vajamineva toitlustuse tagamiseks. Soetatakse tehnilised seadmed ja otsimiseks vajalik varustus.</td>
                </tr>
                <tr>
                    <td>Juuli – august 2018</td>
                    <td>Toimuvad maastikuotsingu koolitused ja praktilised harjutused.</td>
                </tr>
                <tr>
                    <td>September – oktoober 2018</td>
                    <td>Osaletakse maastikuotsingutel koostöös politseiga ja teiste vabatahtlikega.</td>
                </tr>
                <tr>
                    <td>November 2018</td>
                    <td>Tehakse ettevalmistusi koolitusteks, kus antakse noortele teadmisi ja oskusi oma kogukonnaelu turvalisemaks muutmisel. Tehakse kokkulepped koolituste läbiviimiseks vajalike ruumide kasutamiseks, transpordi ja koolitusel vajamineva toitlustuse tagamiseks.</td>
                </tr>
                <tr>
                    <td>Detsember 2018 – märts 2019</td>
                    <td>Toimuvad turvalisuse teemalised koolitused.</td>
                </tr>
                <tr>
                    <td>Aprill 2019</td>
                    <td>Antakse läbi kohaliku meedia ja sotsiaalvõrgustiku kogukonnale teavet saavutuste kohta.</td>
                </tr>
                <tr>
                    <td>Mai 2019</td>
                    <td>Alustatakse maastikuotsingu koolituste II etapi  ettevalmistamisega, tehakse kokkulepped koolitusi läbiviivate koolitajatega.</td>
                </tr>
                <tr>
                    <td>Juuni 2019</td>
                    <td>Tehakse kokkulepped maastikuotsingu koolituste läbiviimiseks vajalike ruumide kasutamiseks, koolitajate transpordi ja koolitusel vajamineva toitlustuse tagamiseks.</td>
                </tr>
                <tr>
                    <td>Juuli – august 2019</td>
                    <td>Toimuvad maastikuotsingu koolitused ja praktilised harjutused.</td>
                </tr>
                <tr>
                    <td>September –oktoober 2019</td>
                    <td>Osaletakse maastikuotsingutel koostöös politseiga ja teiste vabatahtlikega.</td>
                </tr>
                <tr>
                    <td>November 2019</td>
                    <td>Tehakse ettevalmistusi koolitusteks, kus antakse noortele teadmisi ja oskusi oma kogukonnaelu turvalisemaks muutmisel. Tehakse kokkulepped koolituste läbiviimiseks vajalike ruumide kasutamiseks, transpordi ja koolitusel vajamineva toitlustuse tagamiseks.</td>
                </tr>
                <tr>
                    <td>Detsember 2019 – märts 2020</td>
                    <td>Toimuvad turvalisuse teemalised koolitused.</td>
                </tr>
                <tr>
                    <td>Aprill 2020</td>
                    <td>Antakse läbi kohaliku meedia ja sotsiaalvõrgustiku kogukonnale teavet saavutuste kohta.</td>
                </tr>
                <tr>
                    <td>Juuni-august 2020</td>
                    <td>Valmistatakse ette ja korraldatakse suuremahuline maastikuotsingu alane õppus kõigile koolitatud inimestele.</td>
                </tr>
                <tr>
                    <td>September – Oktoober 2020</td>
                    <td>Analüüsitakse projekti mõju ja kasulikkus, tehakse otsus projekti jätkusuutlikkuse ja vajaduse kohta. Võetakse kokku kogu projekti tulem ja kajastatakse läbi kohaliku meedia ja sotsiaalvõrgustiku kogukonnale teavet saavutuste kohta.</td>
                </tr>
            </table>
        );
    }
}

export default Table;
