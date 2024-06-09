/** 
 * This file contains functionality to fetch invoice data from a specified JSON file, 
 * returning a Promise that resolves to an array of invoice objects.
 */


export async function fetchInvoiceGroups(filePath) {
    try {
      const response = await fetch(filePath);
      const data = await response.json();
      console.log('Fetched data:', data);
      return data.pay_run.invoices;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  };