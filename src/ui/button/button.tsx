import React from 'react';

interface IButtonProps {
    label: string;
    url: string;
}

class Button extends React.Component<IButtonProps, {}> {
    render() {
        return <a href={this.props.url} className="button">{this.props.label}</a>;
    }
}

export default Button;
