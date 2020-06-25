import React from "react";
import './header.scss';

interface Link {
    id: string;
    title: string;
}

interface HeaderProps {
    links: Link[];
}

class Header extends React.Component<HeaderProps, {}> {
    /*     
    constructor(props: HeaderProps) {
        super(props);
    } 
    */

    render() {
        return (
            <>
                title
                {this.props.links.map((link: Link) => {
                    return link.title;
                })}
            </>
        );
    }
}

export default Header;