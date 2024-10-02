const message=document.querySelector('.text');
const add=document.querySelector('.add');

const date=document.querySelector('.date');
const listItems=document.querySelector('.listItems');



// let todoOnpage="";
// let items;
// function todo(){
   
//     if((message.value !== "")&& (date.value !== "")){
//         let todoOnpage="";
//         for (let i = 0; i < list.length; i++) {
            
           
//             items=`<div class='all'> <p>${message.value} </p>  <b>${date.value} </b> <button class='delete' onclick='list.splice(${i},1);' > Delete </button> <input type='checkbox' class='check'></div>`;
           
          
            
//             todoOnpage=items;
        
        
//     listItems.innerText=list
//         console.log(list)  
        
//     }


// }
// todo()
// }
// function add_in(){
//     todo();
//    list.push(items)
//    message.value="";


// }

   
    
let list=[
    {
        name:'cypher',
        time:'20/20/2024'
    }
]
check();
function check(){
    let todohtml="";
    if((message.value !== "")&& (date.value !== "")){
    for(let i=0; i<list.length; i++){
       const todoobj=list[i];
       console.log(todoobj)

       const name=todoobj.name
       const time=todoobj.time

       html=`<div class='all'> <p>${name} </p>  <b>${time} </b> <button class='delete' onclick='list.splice(${i},1) ; check()' > Delete </button> <input type='checkbox' class='check'></div>`;
      
       
       todohtml+=html;
    }
    document.querySelector('.listItems').innerHTML=todohtml
}   
}

 function add_in(){
   
     name=message.value;
     time=date.value;
     list.push({
        name:name,
        time:time
     });
    
     check();
 }


  



  

