import React from 'react';
const Header = () => {

    const header={
        height:'7vh',
        backgroundColor:'#212121',
        width: '100vw',
        display: 'flex'
        
        //borderRadius: '20px',
        //position: 'absolute',
       // boxShadow: '2px 2px 5px #f0f2f2',
     
    }

    return(<div style = {header} className='navbar navbar-brand'></div>)
}

export default Header;