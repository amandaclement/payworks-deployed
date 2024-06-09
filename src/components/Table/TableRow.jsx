/** 
 * TABLEROW COMPONENT
 * 
 * This file contains the implementation for a custom TableRow component.
 * It's used by the Table component to create a row of data cells.
 */

import { Checkbox } from '../Checkbox';
import './Table.css';

export default function TableRow( { rowId, row, excluded, onCheckboxChange } ) {
    console.log(excluded);
    return (
        <tr className={excluded ? 'excluded-tr' : 'included-tr'}>
            <td>
                {/* Row checkbox */}
                <Checkbox 
                    className='checkbox-dark'
                    id={`checkbox-${rowId}`}
                    checked={!excluded}
                    onChange={() => onCheckboxChange(rowId, excluded)}
                />
            </td>
            {/* Map through each row to create table data cells */}
            {row.map((entries, colIndex) => (
                <td key={colIndex}>
                    {entries.map((entry) => (
                        // Create a <span> for each entry, applying the class from entry[1] and displaying the content from entry[0]
                        <span className={entry[1]}>
                            {entry[0]}
                        </span>
                    ))}
                </td>
            ))}
        </tr>
    );
}