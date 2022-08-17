// import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import News from './component/News';

function App() {
  return (
   <>
   <Navbar/>
   <News pageSize= {5}/>
   </>
  );
}

export default App;
