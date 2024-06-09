/** 
 * TABLE COMPONENT
 * 
 * This file contains the implementation for a custom Table component.
 */

import TableRow from './TableRow';
import './Table.css';

export default function Table( { headers, cols, data, className, id, onCheckboxChange } ) {
    return (
        <div className={`table-container ${className}`} id={id}>
            <table>
                {/* Table head */}
                <thead>
                    <tr>
                        <th/>
                        {headers.map(header => (
                            <th key={header}>
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                
                {/* Table body */}
                <tbody>
                    {/* Create a TableRow for each row of data */}
                    {cols.map((row, index) => (
                        <TableRow 
                            rowId={row[0][0][0]} // Corresponds to ID number
                            row={row}
                            excluded={data[index % data.length].excluded} // Corresponds to inclusion status in data
                            onCheckboxChange={onCheckboxChange} 
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}