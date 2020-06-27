import React from 'react';
import CollapseContent from './collapse-content';
import Separator from '../separator/separator';
import Icon from '../icon/icon';

interface ICollapseTriggerProps {
    text: string;
}

interface ICollapseTriggerState {
    show: boolean;
}

class Collapse extends React.Component<ICollapseTriggerProps, ICollapseTriggerState> {
    constructor(props: ICollapseTriggerProps) {
        super(props);

        this.state = {
            show: false,
        };
    }

    render() {
        return (
            <>
                <p className="collapse-trigger trigger-text" onClick={() => this.setState({ show: !this.state.show })}>
                    <Icon name={this.state.show ? 'angle-up' : 'angle-down'} size={22} />
                    {this.props.text}
                </p>
                <Separator small />
                <CollapseContent show={this.state.show}>{this.props.children}</CollapseContent>
            </>
        );
    }
}

export default Collapse;
