const xlsx = require('xlsx');

const workbook = xlsx.readFile('./guidemap.xlsx', { type: 'file' });
console.log(workbook.SheetNames);
