import React from 'react';
import { Typography, Box } from '@material-ui/core';

interface ISectionProps {
    id: string;
    title?: string;
}

class Section extends React.Component<ISectionProps> {
    render(): JSX.Element {
        return (
            <Box id={this.props.id} component="span" m={10}>
                {this.props.title && (
                    <Typography variant="h3" gutterBottom>
                        {this.props.title}
                    </Typography>
                )}
                <div className="section__body">{this.props.children}</div>
            </Box>
        );
    }
}

export default Section;
