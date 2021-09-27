const converter = require('json-2-csv');
const fs = require('fs')

// declare a JSON array
const Information = [
   
    {
        "Name": "Aachal",
        "Gender": "Femal",
        "Job": "Programmer",
        "City": "Amravati",
        "State": "Maharashtra",
        "Salary":" 5LPA"
        
    },
    {
        "Name": "Ayur",
        "Gender":"Male",
        "Job": "Teacher",
        "City": "Nagpur",
        "State": "Maharashtra",
        "Salary":" 4LPA"
        
    },
    {
        "Name": "Savi",
        "Gender":"Female",
        "Job": "Lawer",
        "City": "Pune",
        "State": "Maharashtra",
         "Salary":"3.7LPA"
    }];

// convert JSON array to CSV string
converter.json2csv(Information, (err, csv) => {
    if (err) {
        throw err;
    }

    // print CSV string
    console.log(csv);
});
// Convert JSON array to CSV string
converter.json2csv(Information, (err, csv) => {
    if (err) {
        throw err;
    }

    // print CSV string
    console.log(csv);

    // write CSV to a file
    fs.writeFileSync('Information.csv', csv);
    
});