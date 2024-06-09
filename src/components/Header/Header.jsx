/** 
 * HEADER COMPONENT
 * 
 * This file contains the implementation for a custom Header component.
 */

import './Header.css';

export default function Header( { title, menuItems, className } ) {
    return (
        <header className={className}>
            <h1>{title}</h1>

            <nav>
                {/* Not implemented... */}
            </nav>
        </header>
    );
}