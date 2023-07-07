import VendingMachine from './VendingMachine.js'
import { VendingMachineNavBar, SnackNavBar } from './NavBar.js'
import Soda from './Soda.js'
import Candy from './Candy.js'
import Chips from './Chips.js'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route exact={true} path="/" element={<><VendingMachine /><VendingMachineNavBar /></>} />
        <Route exact={true} path="/candy" element={<><Candy /><SnackNavBar /></>} />
        <Route exact={true} path="/chips" element={<><Chips /><SnackNavBar /></>} />
        <Route exact={true} path="/soda" element={<><Soda /><SnackNavBar /></>} />
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
