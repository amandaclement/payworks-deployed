/** 
 * DROPDOWN COMPONENT
 * 
 * This file contains the implementation for a custom Dropdown component.
 */

import { Button } from '../Button';
import './Dropdown.css';
import Icons from '../../assets/icons';

export default function Dropdown( { label, options, className, buttonClassName } ) {
  
    return (
      <div className={`dropdown ${className}`}>
        <Button 
          text={label}
          icon={Icons.IoIosArrowDown}
          label='Dropdown arrow'
          className={buttonClassName}
        />
        {/* Not implemented... */}
      </div>
    );
}