import React, { useState } from 'react';
import books from './books.json';

const Card = (props) => { 
    
    const details={
        justifyContent: 'center',
        padding:'10px 7% 0px 7%',
        overflow: 'hidden',
        height:'25%'
    }

    const images = {
        height:'80%',
        display:'flex',
        width:'100%',
        borderRadius: '20px',
        boxShadow: '2px 2px 5px #D8D8D8',
    }

    const card={ 
        height: '100%',
        borderRadius: '20px',
        boxShadow: '2px 2px 5px #E0E0E0',
        margin: 'none',
        paddingBottom:'15px',
        }

    const name={
        width:'75%',
        margin:'none'
    } 
    const wishlist={
        width:'25%'
    }

    return(
        <div style={card}>
        <img src = {props.img} style={images}></img>
        <div className='row' style={details}><div className='column' style={name}><p>{props.title}</p>
        <p >{props.author}</p></div>
        <div className='column' style={wishlist}><span class="dot"></span></div></div>
        </div>)
}


function Catalog(){
    const [count] = useState('popular books');

    var Catalogview = books.map((book) => { 
        const grid = {
            height:'480px',
            margin: '20px 0px 20px',
            padding:'0px 45px 0px 45px'
        }

        if(count=='popular books')
        {
            console.log('90 : '+count);
            return (
                <div style={grid} className="col-lg-4 col-md-6 col-10">
                <Card key={book.Id} title={book.Title} author={book.Author} img={book.Image}
                    // 
                    >
                </Card>
                </div>
            );
           }
    
        else {
            if(book.Category.includes(count)){
                    return (
                    <div style={grid} className="col-lg-4 col-md-6 col-10">
                        {console.log('div')}
                      <Card key={book.Id} title={book.Title} author={book.Author} img={book.Image}
                        // 
                        >
                      </Card>
                    </div>
                  );
            }
            else{
                console.log('106 : '+book.Category);
                return(null);
            }
        }
    });

    return(<div className="container">
    <div className="row">
        {Catalogview}
    </div>
    </div>)
}

// class Catalog extends Component{

//     constructor(props) {
//         super(props);
//        // const catalogview=null;

//         this.state = {
//             selectedBook: null,
//             selectedCat:'popular books'
//         }
//     }

//     onBookSelect(book) {
//         this.setState({ selectedBook: book});
//     }

//     onCatSelect(cat) {
//         // this.setState({ selectedBook: book});
//         this.state = {selectedCat:cat}
//         this.render()
//     }    

//     // catalogview = ('popular books') => {
//     //     const grid = {
//     //         height:'480px',
//     //         margin: '20px 0px 20px',
//     //         padding:'0px 45px 0px 45px'
//     //     }
        
//     //     console.log('77 : '+this.state.selectedCat);
      
//     //     var catalogview = books.map((book) => { 
//     //         if(this.state.selectedCat=='popular books')
//     //         {
//     //         console.log('81 : '+this.state.selectedCat);
           
//     //             return (
//     //                 <div style={grid} className="col-lg-4 col-md-6 col-10">
//     //                 <Card key={book.Id} title={book.Title} author={book.Author} img={book.Image}
//     //                     onClick={() => this.onBookSelect(book)}>
//     //                 </Card>
//     //                 </div>
//     //             );
//     //            }
        
//     //         else {
//     //             console.log('90 : '+this.state.selectedCat);
//     //             if(book.Category.includes(this.state.selectedCat)){
//     //                 console.log('92 : '+book.Category);     
//     //                     return (
//     //                     <div style={grid} className="col-lg-4 col-md-6 col-10">
//     //                         {console.log('div')}
//     //                       <Card key={book.Id} title={book.Title} author={book.Author} img={book.Image}
//     //                         onClick={() => this.onBookSelect(book)}>
//     //                       </Card>
//     //                     </div>
//     //                   );
//     //             }
//     //             else{
//     //                 console.log('106 : '+book.Category);
//     //                 return(null);
//     //             }
//     //         };
//     //     }
//     // );
        
// //}

//    render() {
//         const grid = {
//             height:'480px',
//             margin: '20px 0px 20px',
//             padding:'0px 45px 0px 45px'
//         }
        
//         console.log('77 : '+this.state.selectedCat);
      
//         var catalogview = books.map((book) => { 
//             if(this.state.selectedCat=='popular books')
//             {
//             console.log('81 : '+this.state.selectedCat);
           
//                 return (
//                     <div style={grid} className="col-lg-4 col-md-6 col-10">
//                     <Card key={book.Id} title={book.Title} author={book.Author} img={book.Image}
//                         onClick={() => this.onBookSelect(book)}>
//                     </Card>
//                     </div>
//                 );
//                }
        
//             else {
//                 console.log('90 : '+this.state.selectedCat);
//                 if(book.Category.includes(this.state.selectedCat)){
//                     console.log('92 : '+book.Category);     
//                         return (
//                         <div style={grid} className="col-lg-4 col-md-6 col-10">
//                             {console.log('div')}
//                           <Card key={book.Id} title={book.Title} author={book.Author} img={book.Image}
//                             onClick={() => this.onBookSelect(book)}>
//                           </Card>
//                         </div>
//                       );
//                 }
//                 else{
//                     console.log('106 : '+book.Category);
//                     return(null);
//                 }
//             }
//         });
                    
                    
                    
//         return (
//             <div className="container">
//                 <div className="row">
//                     {catalogview}
//                 </div>
//             </div>
//         );
//    }

//     // return()=>{
//     //     <div className="container">
//     //             <div className="row">
//     //                 {catalogview}
//     //             </div>
//     //         </div>
//     // }
// }

export default Catalog;