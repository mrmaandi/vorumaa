import React from 'react';
import Header from '../../ui/header/header';

class HeaderComponent extends React.Component {
    componentDidMount(): void {
        window.addEventListener('scroll', function (event) {
            const header = document.querySelector('header');
            header && header.classList.toggle('sticky', window.scrollY > 0);
        });
    }

    render(): JSX.Element {
        return (
            <Header
                links={[
                    {
                        id: 'https://www.facebook.com/turvalinevorumaa/',
                        title: 'facebook-square',
                        icon: true,
                    },
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
