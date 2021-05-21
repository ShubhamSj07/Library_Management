import './App.css';
import Header from './Header';
import Categories from './Categories';
import Catalog from './Catalog.jsx';
//import { val } from './Categories';

function App() {
  var cate='popular books';
  return (
    <div className="App">
      <link rel="stylesheet" href= "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"></link>
      <Header/>
      <Categories/>
      <div className='container' ><br/>
         <div><p id='category'>POPULAR BOOKS</p><hr/><br/></div>
         <div className='row' id='catalog'><Catalog/></div>
      </div>
    </div>
  );
}

export default App;
