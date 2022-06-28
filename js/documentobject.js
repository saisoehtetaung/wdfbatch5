let val;

val = document;
val = document.doctype;
val = document.head;
val = document.body;
val = document.URL;

val = document.links;//HTMLCollection
val = document.links[0];
val = document.links[3];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList;//DOMTokenList
val = document.links[0].classList[1];
val = document.links[0].classList[0];
val = document.links[0].classList.value;

val = document.forms;//HTMLCollection
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].className;
// val = document.forms[0].classList;
// val = document.forms[0].classList[0];
// val = document.forms[0].action;
// val = document.forms[0].method;

val=document.images;
val = document.images[0];
val = document.images[0].src;
val = document.images[0].className;
val = document.images[0].alt;
val = document.images[0].getAttribute('abc');

val = document.scripts;
val = document.scripts[0];
val = document.scripts[0].src;
val = document.scripts[0].type;
val = document.scripts[0].getAttribute('src');

console.log(val);

// Change Style 

document.getElementById("task-title").style.backgroundColor = "grey";
document.getElementById("task-title").style.color = "#fff";
document.getElementById("task-title").style.padding = "5px";


//Change Content
document.getElementById("task-title").textContent = "My List";
document.getElementById("task-title").innerText = "My Tasks";
document.getElementById("task-title").innerHTML = '<span style="color:yellow">My Jobs</span>';

// Call to Class Name 
let lis = document.getElementsByClassName("list-group-item");
// console.log(lis);
// lis[0].style.color = "blue";
// lis[1].textContent = "Have to visit";

// Call to Tag 
let tags = document.getElementsByTagName("li");
// tags[0].style.color="red";
// tags[1].innerText="Boo";
// console.log(tags);

// querySelector 
// console.log(document.querySelector("#task-title"));
// console.log(document.querySelector(".card-title"));
// console.log(document.querySelector("h3"));
// console.log(document.querySelector("li"));
// document.querySelector("ul li:nth-child(odd)").style.backgroundColor="silver";

const listitems = document.querySelector("ul").getElementsByClassName("list-group-item");
// console.log(listitems);

// document.querySelector("ul li:nth-child(odd)").style.backgroundColor="silver";
// document.querySelector("ul li:nth-of-type(even)").style.backgroundColor="grey";

// listitems[0].textContent="hello";

let lists=Array.from(listitems);

lists.forEach((listitem,index)=>{
    // console.log(index);
    // listitem.textContent = "Hello";

    if(index%2==0){
        listitem.style.background = "grey";
    }else{
        listitem.style.background = "silver";
    }
});

// querySelectorAll 
let its = document.querySelector("ul.list-group li.list-group-item");
console.log(its);

let itms =document.querySelectorAll("ul.list-group li.list-group-item");
console.log(itms);//NodeList

// itms.forEach((itm,index)=>{
//     // console.log(itm);
//     // itm.textContent = "Hello";
//     itm.innerText = `${index} : Hello world`;
// });

const liodd = document.querySelectorAll('li:nth-child(odd)');
const lieven = document.querySelectorAll('li:nth-of-type(even)');

console.log(liodd);

liodd.forEach((li,index)=>{
    li.style.color="red";
});

for(let i=0;i<lieven.length;i++){
    // console.log(lieven[i]);
    lieven[i].style.background="silver";
}

// children 
let chl;
const getul = document.querySelector("ul");
console.log(getul);
const getli = document.querySelector("li.list-group-item:first-child");
console.log(getli);

// chi = document.getElementsByClassName("list-group-item");
// console.log(chi);

chl = getul.children;
chl = getul.children[2];
console.log(chl);

// getul.children[1].innerHTML="How to do";

// children of children 
chl=getul.children[1].children;
chl = getul.children[1].children[0].id;
chl = getul.children[1].children[0].className;
chl = getul.children[1].children[0].classList;
chl = getul.children[1].children[0].getAttribute('href');

chl = getul.children[1].children[0].children;
chl = getul.children[1].children[0].children[0];

// First Element Child
chl = getul.children[0];
chl = getul.firstElementChild;

// Last Element Child 
chl = getul.lastElementChild;
chl.style.color= "blue";

// Child Element Count 
chl = getul.children.length;
chl = getul.childElementCount;
console.log(chl);

// Parent Element 
const getfirstli = document.querySelector("li.list-group-item:first-child");
console.log(getfirstli.parentElement);

//Next Element Sibling


//Attribute
// let getall = firstlink.getAttribute('href');
//console.log(gerall)
// firstlink.setAttribute('href','https://google.com');
// getatt = firstlink.hasAttribute('title');
// console.log(geratt);
// getatt = firstlink.hasAttribute('title');
// console.log(getatt);

//addEventListener(eventtype,callbackfunction)

const clearbtn = document.querySelector('.clear-tasks');

//Method1
// clearbtn.addEventListener('click',function(e){
//     console.log('hay i am working');

//     e.preventDeffault();
// });

//Mathod 2
// clearbtn.addEventListener('click',myclick);

function myclick(e){
    let val = e;

    //Event target element
    val = e.target;
    val = e.target.id;
    val = e.target.className;
    val = e.target.classList;

    // e.target.innerText = 'finished';

    //Event Type
    val = e.type;

        // Coordinates event - relative to the window 
    val = e.clientX;
    val =e.clientY;

        // Coordinates event - relative to the element
    val = e.offsetX;
    val = e.offsetY;

    console.log(val);

    e.preventDefault();
}

//MouseEvent

const clbtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');


// click 
// clearbtn.addEventListener('click',mouseeventtype);

// double click 
// clearbtn.addEventListener('dblclick',mouseeventtype);

// mousedown 
// clbtn.addEventListener('mousedown',mouseeventtype);

// mouseup 
// clbtn.addEventListener('mouseup',mouseeventtype);

// mouseenter 
// clbtn.addEventListener('mouseenter',mouseeventtype);

//mouseover
// card.addEventListener('mouseover',mouseeventtype);

// mouseleave 
// card.addEventListener('mouseleave',mouseeventtype);

// mousemove 
card.addEventListener('mousemove',mouseeventtype);

function mouseeventtype(e){
    // console.log(`Event Type = ${e.type}`);

    heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

    // document.body.style.background = `rgba(${e.offsetX},${e.offsetY},1)`;

    e.preventDefault();
}


const form = document.querySelector('form');


form.addEventListener('submit',inputEventType);

function inputEventType(e){
    console.log(`Event Type = ${e.type}`);

    e.preventDefault();
}

const inputtask = document.getElementById('task');
const heading = document.querySelector('h4');

//keydown
// form.addEventListener('keydown',inputEventType2);

//keyup
// form.addEventListener('keyup',inputEventType2);

// focus 
// inputtask.addEventListener('focus',inputEventType2);

// blur 
// inputtask.addEventListener('blur',inputEventType2);

// cut 
// inputtask.addEventListener('cut',inputEventType2);

// paste
// inputtask.addEventListener('paste',inputEventType2);

// input 
// inputtask.addEventListener('input',inputEventType2);

// function inputEventType2(e){
    
//     console.log(`Event Type = ${e.type}`);
//     console.log(e.target.value);

//     heading.textContent = e.target.value;

//     e.preventDefault();
// }


//Event Bubbling
document.querySelector('.card-title').addEventListener('click',function(){
    console.log("i am card-title");
});

document.querySelector('.card-content').addEventListener('click',function(){
    console.log("i am card-content");
});


document.querySelector('.card').addEventListener('click',function(){
    // console.log("i am card");
})

// Event Delegation 

// const deleitem = document.querySelector('.delete-item');
// deleitem.addEventListener('click',deleteitem);

// function deleteitem(e){
//     console.log('i am delete item');
//     console.log(e.target);

//     e.preventDefault();
// }

// document.body.addEventListener('click',evendelg);

// function evendelg(e){
    // console.log('i am working');
    // console.log(e.target);

    // if(e.target.className == "fa-solid fa-trash-can"){
    //     console.log('hay i am trash can');
    // }

    // if(e.target.parentElement.className == 'delete-item'){
    //     console.log('i am delete item by tag');
    // }

//     if(e.target.parentElement.classList.contains('delete-item')){
//         // console.log('i am delete item by a tag');
//         // e.target.remove();

//         // e.target.parentElement.remove();

//         e.target.parentElement.parentElement.remove();

//     }
//     e.preventDefault();
// }

document.querySelector('form').addEventListener('submit',function(e){
    e.preventDefault();
    // console.log('hay i am ssha')

    const getnewtask = document.getElementById('task').value;
    // console.log(getnettask);

    // localStorage.setItem("mytask",getnewtask);

    let alltasks;
    if(localStorage.getItem('mytasks')===null){
        alltasks=[];
    }else{
        alltasks= JSON.parse(localStorage.getItem("mytasks"));
    }

    alltasks.push(getnewtask);

    // console.log(alltasks);

    localStorage.setItem("mytasks",JSON.stringify(alltasks));
})

