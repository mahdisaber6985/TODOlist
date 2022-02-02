// let list =[]
// const inp = document.getElementById("inp")
// document.getElementById("btn").addEventListener("click",function(){
//     list.push(inp.value)
// })

// const update=()=>{
//     for (let i = 0; i < list.length; i++) {
//         list += list[i] + "<br>";}
//         console.log('update');
//         document.getElementById("list").innerHTML = text;
//         inp.value=''
//     }

    // let text = "";

    // for (let i = 0; i < 5; i++) {
    //   text += "The number is "<h4> + i + "<br>";
    // }
    
    // document.getElementById("demo").innerHTML = text;



// function showlist(){
   
//     list.forEach(function(n){
//     todolist.innerHTML = n
//     })
//     inp.value=''
    
//.addEventListener("click",function(){
    // list.push(inp.value)})     }
      




const todolist = document.getElementById("todolist")
const inp = document.getElementById("inp")
const btn = document.getElementById("btn")
const li = document.getElementById('li')
const inpsearch = document.getElementById('inpsearch')
//esm o badn yadasht konm
let TODOlist = [];
let result = ''

const updateInput=()=>{
    
    let filter = TODOlist.filter(item =>{
    return item.includes(inpsearch.value)
})
    result =''
    inp.value =''
    // TODOlist.push(inp.value)
    // console.log(TODOlist);
    for(let i =0 ; i < filter.length ;i++) {
        result += `
        <li> ${filter[i]} </li>
        <button onclick="deleteitem(${i})"> delete </button>
        `
        // todolist.innerHTML=TODOlist
    }
    todolist.innerHTML = result
    console.log('filter',filter);

 


}

const btnonclick =()=>{
     TODOlist.push( inp.value)
    // todolist.innerHTML = result;
    
}
console.log(TODOlist);

const updateinputsearch =()=>{
 

}
 
//  const updateUI=()=>{
//     todolist.innerHTML=TODOlist
//  }


const deleteitem =(i)=>{
    TODOlist.splice(i,1)
updateInput()    

}
