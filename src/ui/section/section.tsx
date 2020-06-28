import React from 'react';
import Separator from '../separator/separator';

type Theme = 'gray' | 'white' | 'blue';

interface ISectionProps {
    id: string;
    title?: string;
    theme?: Theme;
}

class Section extends React.Component<ISectionProps, {}> {
    render() {
        return (
            <div id={this.props.id} className={'content ' + this.getTheme()}>
                {this.props.title && (
                    <>
                        <h1 className="title">{this.props.title}</h1>
                        <Separator />
                    </>
                )}
                {this.props.children}
            </div>
        );
    }

    private getTheme() {
        switch (this.props.theme) {
            case 'gray':
                return 'theme-gray';
            case 'white':
                return 'theme-white';
            case 'blue':
                return 'theme-blue';
            default:
                return 'theme-white';
        }
    }
}

export default Section;
