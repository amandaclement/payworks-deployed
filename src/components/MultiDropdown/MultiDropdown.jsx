/** 
 * MULIDROPDOWN COMPONENT
 * 
 * This file contains the implementation for a custom MultiDropdown component.
 * It's essentially a custom dropdown of checkboxes, allowing multi-select.
 * 
 */

import React, { useState } from 'react';
import { Button } from '../Button';
import { Checkbox } from '../Checkbox';
import './MultiDropdown.css';
import Icons from '../../assets/icons';

export default function MultiDropdown( { label, options, className, buttonClassName, checkboxClassName, onCheckboxChange } ) {
  
  // Toggle dropdown open/close
  const [isOpen, setIsOpen] = useState(false);
  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  return (
    <div className={`multi-dropdown ${className}`}>
      <Button 
        text={label}
        icon={Icons.IoIosArrowDown}
        className={buttonClassName}
        onClick={toggleDropdown}
      />
      {isOpen && (
        <div className='dropdown-content'>
          {/* Create a checkbox for each option */}
          {options.map(([option, isChecked]) => (
            <div key={option}>
              <Checkbox
                className={checkboxClassName}
                id={label}
                checked={!isChecked}
                onChange={() => onCheckboxChange(option, isChecked)}
              />
              <label htmlFor={option}>{option}</label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}