import React from 'react';

interface ISeparatorProps {
    small?: boolean;
}

class Separator extends React.Component<ISeparatorProps> {
    render() {
        return (
            <div id="separator" className={'separator ' + this.props.small ? 'separator-small' : 'separator-default'} />
        );
    }
}

export default Separator;
