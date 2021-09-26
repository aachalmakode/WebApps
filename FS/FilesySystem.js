const fs = require('fs')


//write json file
fs.writeFile('update.json',JSON.stringify([" Name: Aachal","Last Name: Makode"] ), (err) => {
if(err) throw err 
})

//read json file 
fs.readFile('update.json', 'utf8'
,(err,content) => {
    if(err) throw err
   console.log(content)
})

//update a json file
fs.appendFile('update.json', JSON.stringify(["City: Amravati"]),(err) => {
if(err) throw err

})
