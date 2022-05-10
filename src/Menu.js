import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div className='menu'>
            <Link to="/">
                <div className="logo-wrapper">
                
                </div>
            </Link>
            <ul className='menu-list'>
                <li className='menu-item'> <Link to="/hitherencounters/">Hither Encounter</Link></li>
                <li className='menu-item'> <Link to="/downfallcitizens/">Downfall Citizens</Link></li>
                <li className='menu-item'><Link to="/">Carnival Surprises</Link></li>
                <li className='menu-item'><Link to="/initiative">Initiative</Link></li>
            </ul>

            
        </div>
    );
};

export default Menu;