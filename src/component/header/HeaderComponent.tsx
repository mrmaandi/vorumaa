import React from 'react';
import Header from '../../ui/header/header';

class HeaderComponent extends React.Component {
    componentDidMount(): void {
        window.addEventListener('wheel', function (event) {
            const header = document.querySelector('header');

            // @ts-ignore
            header && header.classList.toggle('sticky', document.getElementById('landing').getBoundingClientRect().top < 0);
        });
    }

    render() {
        return (
            <Header
                links={[
                    {
                        id: '#activities',
                        title: 'Käesolevad tegevused',
                    },
                    {
                        id: '#accomplishments',
                        title: 'Saavutused',
                    },
                    {
                        id: '#contacts',
                        title: 'Võta ühendust',
                    },
                    {
                        id: '#partners',
                        title: 'Toetajad',
                    },
                ]}
            />
        );
    }
}

export default HeaderComponent;
