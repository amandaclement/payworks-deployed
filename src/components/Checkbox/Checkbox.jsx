/** 
 * CHECKBOX COMPONENT
 * 
 * This file contains the implementation for a custom Checkbox component.
 */

import './Checkbox.css';

export default function Checkbox( { label, className, id, checked, onChange } ) {

    function handleChange(event) {
        onChange(id, event.target.checked);
    }

    return (
        <div className={`checkbox-container ${className}`}>
          <input
            type='checkbox'
            aria-label='Checkbox'
            id={id}
            checked={checked}
            onChange={handleChange}
          />
          <label htmlFor={id}>{label}</label>
        </div>
      );
}