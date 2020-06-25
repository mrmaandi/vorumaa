import React from "react";
import Header from "../../ui/header/header";

class HeaderComponent extends React.Component {
    render() {
        return (
            <Header
                links={[
                    {
                        id: '#link-1',
                        title: 'Link 1'
                    }
                ]}
            />
        );
    }
}

export default HeaderComponent;