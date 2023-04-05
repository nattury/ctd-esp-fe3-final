import './index.css'
import Footer from "./Components/Footer";
import {BrowserRouter, Outlet} from 'react-router-dom'
import Navbar from './Components/Navbar';
import { useGlobalStates } from './Components/utils/global.context';
function App() {

  const {state}=useGlobalStates()
    return (
      <div className="App" style={{ backgroundColor: state.dark && '#282c34',color: state.dark && 'white' }}>
        <Navbar/>
        <Outlet/>
        <Footer/>
      </div>
  );
}

export default App;
