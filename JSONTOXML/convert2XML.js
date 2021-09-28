var jsonxml = require('json2xml');
 
var xml = jsonxml({
    node:'text content',
    parent:[
        {name:'Aachal',text:'Good Morning',children:{soya:'cute'}},
        {name:'Siya',text:'Hello',attrs:{mood:'sad'},children:[
            {name:'soya',text:'heyy'},
            'hi',
            {name:'soya',text:'strong',attrs:{type:2}}
        ]},
        {name:'Aachal',attrs:'mood="party!"'}
    ],
    parent2:{
        hi:'is a nice thing to say',
        node:'i am another not special child node',
        date:function(){
            return (new Date())+'';
        }
    }
})
 
console.log(xml);