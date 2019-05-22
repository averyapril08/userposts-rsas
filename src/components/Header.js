import React, { Component } from 'react';
import './Header.scss';

class Header extends Component{

    render(){
        return(
            <div style={{color:"red", textAlign:"center" }}>
                <h1>hello,please search below</h1>
            </div>
        )
    }
}

export default Header;