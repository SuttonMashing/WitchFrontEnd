import React from 'react';

function Header(props) {
    return (
        <header className="header">
            <div className="header-container">
                <ul className="header-items">
                    <li>Encounters</li>
                    <li>Patreon</li>
                    <li>Hugs and Kisses</li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
