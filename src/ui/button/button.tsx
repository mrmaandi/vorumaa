import React from 'react';
import Icon from '../icon/icon';

interface IButtonProps {
    label: string;
    url: string;
    icon?: string;
}

class Button extends React.Component<IButtonProps, {}> {
    render() {
        return (
            <div className="button__wrapper">
                <a href={this.props.url} className="button">
                    {this.props.label} {/*{this.props.icon && <span className="button__icon"><Icon name={this.props.icon} size={36} /></span>}*/}
                </a>
            </div>
        );
    }
}

export default Button;
