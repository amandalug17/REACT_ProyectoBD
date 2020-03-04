import React from "react";

class Footer extends React.Component{
    render(){
        return(
            <footer class="navbar navbar-expand-lg navbar navbar-dark bg-dark text-center sticky-bottom" style={{overflowY:'hidden', height: '15vh'}}>
            <text style={{color: 'white', marginLeft:'45%'}}>©EasyMarket</text>
            </footer>
        );
    }
}

export default Footer;