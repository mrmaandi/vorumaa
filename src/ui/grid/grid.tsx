import React from 'react';

interface IGridProps {

}

class Grid extends React.Component<IGridProps, {}> {
    render() {
        return (
            <div className="grid grid__container">
                {this.props.children}
            </div>
        );
    }
}

export default Grid;
