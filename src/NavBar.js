import react from 'react'
import { NavLink } from "react-router-dom";
import './NavBar.css'

const VendingMachineNavBar = () => {
    return (
        <div className='NavBar-div' id='VendingMachineNavBar-div'>
            <ul className='NavBar' id='VendingMachineNavBar'>
                <li className='VendingItem' id='candy-li'><NavLink to="/candy">Candy</NavLink></li>
                <li className='VendingItem' id='chips-li'><NavLink to="/chips">Chips</NavLink></li>
                <li className='VendingItem' id='soda-li'><NavLink to="/soda">Soda</NavLink></li>
            </ul>
        </div>

    );
}

const SnackNavBar = () => {
    return (
        <div className='NavBar-div' >
            <ul className='NavBar' id='SnackNavBar'>
                <li className='VendingItem' id='home-li'><NavLink to="/">Get Another Snack</NavLink></li>
            </ul>
        </div>

    );
}

export { VendingMachineNavBar, SnackNavBar }