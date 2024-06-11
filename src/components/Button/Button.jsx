/** 
 * BUTTON COMPONENT
 * 
 * This file contains the implementation for a custom Button component.
 */

import React from 'react';
import './Button.css';

export default function Button( { text, icon, className, label, onClick } ) {
    return (
        <button className={className} onClick={onClick} aria-label={label}>
            {/* Render text if it exists */}
            {text && <span className={'button-text'}>{text}</span>} {/* Render the text if it exists */}

            {/* Render icon if it exists */}
            {icon && React.createElement(icon, { className: 'button-icon' })}
        </button>
      );
}