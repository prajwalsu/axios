import logo from './logo.svg';
import './App.css';
import Products from './components/ProductsFetchedUsingAxios';
// import Fetch from './components/ProductFetchinfunctionmethod';
// import EditProducts from './components/EditProduct';
// import AddProducts from './components/AddProducts';

function App() {
  return (
    <div className="App">
    {/* <AddProducts/> */}
    {/* <EditProducts/> */}
    <Products/>
    {/* <Fetch/> */}
    </div>
  );
}

export default App;
