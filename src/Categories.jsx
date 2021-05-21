import React ,{useState}from 'react';
import Catalog from './Catalog'
import App from './App';


const Catrow = () => {

    // const [cat, set] = useState('popular books');

    const buttons={
        backgroundColor: '#00000000',
        border:'none',
        width:'9.5vw',
        height:'5.5vh',
    }

    function hover(e) {
        e.target.style.background = '#777777';
    }

    function normal(e) {
        e.target.style.background = '#00000000';
    }

    function click(e){
        val = e.target.value;
        document.getElementById("category").innerHTML = val.toUpperCase();
        console.log("val : "+val);
        // setCount(val);
        //console.log("CAT "+cat)
    }

    return(<div class='container'>
        <button class='cat' style={buttons} value='adventure' onMouseEnter={hover} onMouseLeave={normal} onClick={click}>ADVENTURE</button>
        <button class='cat' style={buttons} value='mystery' onMouseEnter={hover} onMouseLeave={normal} onClick={click}>MYSTERY</button>
        <button class='cat' style={buttons} value='classics' onMouseEnter={hover} onMouseLeave={normal} onClick={click}>CLASSICS</button>
        <button class='cat' style={buttons} value='fiction' onMouseEnter={hover} onMouseLeave={normal} onClick={click}>FICTION</button>
        <button class='cat' style={buttons} value='thriller' onMouseEnter={hover} onMouseLeave={normal} onClick={click}>THRILLER</button>
        <button class='cat' style={buttons} value='fantasy' onMouseEnter={hover} onMouseLeave={normal} onClick={click}>FANTASY</button>
        <button class='cat' style={buttons} value='autobiography' onMouseEnter={hover} onMouseLeave={normal} onClick={click}>AUTOBIOGRAPHY</button>
        </div>)
}
const Categories = () => {

    const header={
        height:'5.5vh',
        backgroundColor:'#9E9E9E',
        width: '100vw',
        display: 'flex'
    }

    return(<div style = {header} className='d-sm-block'><Catrow/></div>)
}

export default Categories;
export var val;
