import React from 'react';
import Logo from '../../assets/logo.png';
import Icon from '../icon/icon';
import { Container } from '@material-ui/core';

interface Link {
    id: string;
    title: string;
    icon?: boolean;
}

interface HeaderProps {
    links: Link[];
}

class Header extends React.Component<HeaderProps> {
    render(): JSX.Element {
        return (
            <header>
                <a href="#landing" className="logo">
                    <img src={Logo} />
                </a>
                <ul>
                    {this.props.links.map((link: Link) => {
                        if (link.icon) {
                            return (
                                <span key={link.id}>
                                    <a className="link--icon" href={link.id}>
                                        <Icon name={link.title} size={28} />
                                    </a>
                                </span>
                            );
                        }
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
