import React from 'react';
import NavigationPanelComponent from './NavigationPanelComponent';
class HeaderComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            logotext:"ITA"
        }
    }
    render(){
        return(
            <div>
                <NavigationPanelComponent logotext={this.state.logotext}/>
            </div>
        );
    }

}
export default HeaderComponent;