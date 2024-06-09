/** 
 * This file contains a data structure to help format the tabular data.
 */

 const invoiceColumns = [
  { 
    header: "Invoice", 
    data: [
      { key: "invoice_number" } 
    ]},
  { 
    header: "Supplier", 
    data: [
      { key: "supplier", className: "line-break-after" },
      { key: "supplier_reference", className: "font-subtext" } 
    ]},
  { 
      header: "Amount", 
      data: [
        { key: "amount", className: "line-break-after" },
        { key: "currency", className: "font-subtext" } 
    ]},
  { 
      header: "Posted / Due", 
      data: [
        { key: "posted_date", className: "line-break-after line-break-after-gap" },
        { key: "due_date" } 
    ]},
    { 
      header: "Status", 
      data: [
        { key: "status", className: "font-subtext all-caps" }
    ]},
];

export { invoiceColumns };

