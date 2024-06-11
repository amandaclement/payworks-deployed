/** 
 * SEARCHBAR COMPONENT
 * 
 * This file contains the implementation for a custom SearchBar component.
 */

import { Button } from '../Button';
import Icons from '../../assets/icons';

export default function SearchBar( { label, className, buttonClassName } ) {
    return (
      <div className={`searchbar ${className}`}>
        <Button 
          text={label}
          icon={Icons.IoSearch}
          label='Search'
          className={buttonClassName}
        />
        {/* Not implemented... */}
      </div>
    );
}