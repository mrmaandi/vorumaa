import React from 'react';
import Icons from './svg/icons.svg';

interface IIconProps {
    name: string;
    color?: string;
    size?: number;
}

class Icon extends React.Component<IIconProps> {
    render() {
        const { name, color, size } = this.props;
        return (
            <svg className={`icon icon-${name}`} fill={color} width={size} height={size}>
                <use xlinkHref={`${Icons}#icon-${name}`} />
            </svg>
        );
    }
}

export default Icon;
