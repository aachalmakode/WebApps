const fs = require('fs')


//write json file
fs.writeFile('file.json',JSON.stringify([" Name: Aachal","Last Name: Makode"] ), (err) => {
if(err) throw err 
})

//read json file 
fs.readFile('file.json', 'utf8',(err,content) => {
    if(err) throw err
   console.log(content)
})

//update a json file
fs.appendFile('file.json', JSON.stringify(["City: Amravati"]),(err) => {
if(err) throw err

})
