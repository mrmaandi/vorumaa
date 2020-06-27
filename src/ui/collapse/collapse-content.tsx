import React from 'react';

interface ICollapseProps {
    show: boolean;
}

class CollapseContent extends React.Component<ICollapseProps, {}> {
    render() {
        return this.props.show && this.props.children;
    }
}

export default CollapseContent;
