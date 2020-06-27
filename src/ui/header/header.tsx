import React from 'react';

interface Link {
    id: string;
    title: string;
}

interface HeaderProps {
    links: Link[];
}

class Header extends React.Component<HeaderProps, {}> {
    render() {
        return (
            <header>
                <a href="#landing" className="logo">
                    Turvaline Võrumaa
                </a>
                <ul>
                    {this.props.links.map((link: Link) => {
                        return (
                            <li key={link.id}>
                                <a href={link.id}>{link.title}</a>
                            </li>
                        );
                    })}
                </ul>
            </header>
        );
    }
}

export default Header;
