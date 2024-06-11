/** 
 * APP.JS
 * 
 * Main entry point and root component of the React application,
 * responsible for rendering the main layout and managing global state.
 */

import React, { useEffect, useState } from 'react';
import { fetchInvoiceGroups } from './utils/fetchData';
import { getValues, initializeOptions, getColumns, getOptions } from './utils/helpers';
import { invoiceColumns } from './utils/tableData.js';
import { Header, Button, Checkbox, Dropdown, MultiDropdown, SearchBar, Table } from './components';
import Icons from './assets/icons';
import './styles/global.css';

function App() {
  const filePath = process.env.PUBLIC_URL + '/data/pay-run.json';
  const headers = getValues(invoiceColumns, 'header');
  const [invoiceGroups, setInvoiceGroups] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  const [dataColumns, setDataColumns] = useState([]);

  // Fetch invoice data when component mounts, populating invoices array
  useEffect(() => {
    const getInvoiceGroups = async () => {
      const invoiceData = await fetchInvoiceGroups(filePath);
      setInvoiceGroups(invoiceData);
      setSuppliers(initializeOptions(invoiceData, 'supplier'));
      setDataColumns(getColumns(invoiceData, invoiceColumns));

      console.log(invoiceData);
    };

    getInvoiceGroups();
  }, []);

  function handleCheckbox(id, isChecked, key) {
    // Toggle check on chosen invoice(s)
    setInvoiceGroups(prevData =>
      prevData.map(entry =>
        entry[key] === id ? { ...entry, excluded: !isChecked } : entry
      ));  
  }

  function updateSupplier(id, key) {
    // Find the invoiceGroup object with matching key
    let invoiceGroup = invoiceGroups.find(item => item[key] === id);

    // Update supplier checkbox if needed (i.e. to include an excluded supplier if one of its invoices was included)
    setSuppliers(suppliers.map(supplier =>
      supplier[0] === invoiceGroup.supplier ? [supplier[0], false] : supplier
    )); 
  }

  // If a checkbox is updated, update excluded value of corresponding invoice in invoices array
  function handleInvoiceCheckbox(id, isChecked) {
    const key = 'invoice_number';
    // Toggle check on chosen invoice
    handleCheckbox(id, isChecked, key);

    updateSupplier(id, key);
  }

  function handleSupplierCheckbox(id, isChecked) {
    // Only take action if supplier is unchecked. If checked, it won't automatically check any invoices
    if (!isChecked) {
      const key = 'supplier';
      // Uncheck all invoices associated with this supplier
      handleCheckbox(id, isChecked, key);
    }

    // Update supplier checkbox
    setSuppliers(suppliers.map(supplier =>
      supplier[0] === id ? [supplier[0], !supplier[1]] : supplier
    ));
  }

  return (
    <>
    <Header 
      title={'PAYWORKS - Pay Run Approval Center'} 
      menuItems={[]}
      className='font-heading' />

    <main>
      <div id='user-controls-container'>
      <div className='flex-container outer'>
        <div className='flex-container wrappable'>
          <Dropdown 
            label='Sort By Invoices' 
            options={[]}
            selectedOption=''
            className='dropdown-light'
            buttonClassName='button-light button-small' />

          <SearchBar 
            label='Search' 
            className='searchbar-light'
            buttonClassName='button-light button-small' />
        </div>

        <div className='flex-container wrappable align-right' id='filters-container'>
          <MultiDropdown
            label='Invoices'
            options={getOptions(invoiceGroups, 'invoice_number', 'excluded')}
            className='dropdown-dark'
            buttonClassName='button-dark'
            checkboxClassName='checkbox-dark'
            onCheckboxChange={handleInvoiceCheckbox} />
          
          <MultiDropdown
            label='Suppliers'
            options={suppliers}
            className='dropdown-dark'
            buttonClassName='button-dark'
            checkboxClassName='checkbox-dark'
            onCheckboxChange={handleSupplierCheckbox} />
          </div>
        </div>
        <div className='flex-container'>
          <div id='inclusion-checkboxes-container'>
            <Checkbox 
              label='Included'
              className='checkbox-light'
              id=''
              checked={true}
              onChange={() => {}} />
                
            <Checkbox 
              label='Excluded'
              className='checkbox-light'
              id=''
              checked={true}
              onChange={() => {}} />
          </div>

          <p className='font-subtext'>Checked = included in Pay Run.</p>
        </div>
      </div>

      <Table 
        headers={headers}
        cols={dataColumns}
        data={invoiceGroups} 
        columns={invoiceColumns} 
        className='table-light-styling' 
        id='invoice-table-container' 
        onCheckboxChange={handleInvoiceCheckbox} />

      <div className='flex-container outer'>
        <div id='edit-buttons-container'>
        <Button 
          icon={Icons.LuUndo2} 
          label='Undo'
          className='button-dark'/>
        <Button 
          icon={Icons.LuRedo2}
          label='Redo'
          className='button-dark'/>
        <Button 
          icon={Icons.FiSave}
          label='Save'
          className='button-dark'/>
      </div>

        <div id='authorize-container'>
          <p className='font-body'>
            Pay run #PR123456 total is <span className='font-emphasis'>90 000.00 GBP</span> across 14 invoices and 6 suppliers.
          </p>
          <br/>
          <Button 
            text='Authorize Pay Run'
            className='button-dark' />
        </div>
      </div>

    </main>
    </>
  );
}

export default App;
