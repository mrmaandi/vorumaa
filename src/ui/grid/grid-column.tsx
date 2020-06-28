import React from 'react';

interface IGridColumnProps {

}

class GridColumn extends React.Component<IGridColumnProps, {}> {
    render() {
        return (
            <div className="grid__item">
                {this.props.children}
            </div>
        );
    }
}

export default GridColumn;
