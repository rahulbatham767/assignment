
// // javascript- console api
// console.log("hello world!");
// console.warn("hello warn");
// console.error("hello errror");
// // alert("hello errror");  

// objects={
//     name:'rahul',
//     branch:"cse",
//     sem:5
// }
// var arr=[122,21,32,12,1,23]

// console.log(arr.toString());
// console.log(objects);

// let date=new Date();
// console.log(date);
// console.log(date.getFullYear());

// let a=document.getElementById("btn");


//Dom manipulation

// console.log("================================");

// let a="i am rahul";
// console.log(a.indexOf("rahul"));

// let b=document.getElementsByTagName("h1[1]").classList.remove("name");
// let tn=document.getElementsByTagName("h1");
// 
// create=document.createElement("div");
// create.innerText = "this is a para";
// tn[0].appendChild(create); -->YE CREATE kiye hue child ke anddar kuch bhi de skta hai

// tn[0].replaceChildren(creat_element1,create_element2); -->YE ek ko dushre se replcae krwa dega 
// 

// removeChild(creat_element1); remove an element

//selecting using query

// sel=document.querySelector("container");
// sel=document.querySelector("container");

// EVENTS IN JAVASCRIPT

// function clicked() {
    // console.log("clicked");
// 
// }
// window.onload=function() { console.log("loaded"); }  //jese hi window load ho jayegi wese hi function kaam krne lgega

// idname.addeventListener("event ka naam",function jo use krenge(){})
// container[0].addEventListener('click',function(){ console.log("click hua bc")});

// ARROW FUNCTION
function sum(a,b){
    return a + b;
}
sum=(a,b)=>{return a + b;}; 



//SET TIMEOUT AND SAME TIMEINTERVAL 

// set timeout(function jisko ek baar run krwana hai kisi diye hue time ke baad);
// set interval(function jisko baar baar run krwana hai ,2000);

// setTimeout(() => {
//     console.log("log kro");
// }, 1000);
// clr=setInterval(() => {
//     console.log("log kro");
// }, 1000);

// clear interval hum setInterval ko variable mein store kr lete h
// then usko clear interval mein pass kr dete h wo fit setTimeout/setInterval dono ko clear kr skta h
//  clearInterval(clr);

/* 
    JAVASCRIPT STORAGE

    LocalStorage.setItem("name", "rahul"); -->localstorage mein apna item set kr skte hai isme
    isme sensitive data store nhi  krna chaiye kyunki ye easily dekha ja skta hai 
    application-->storage-->localstorage

    JOSN
    =========
    obj={'name': "rahul",}
    js=JSON.stringify(obj); -->ye object ko json format mein convert kr dega

    json only support " "  not support ' ' 

    parse=JSON.parse(` {"name": "rahul",length:9:] `); --> ye json type mein convert kr dega 

    localstorage.removeitem --> ye item remove kr dega 
    localstorage.clear --> ye clear krdega localstorage 
    */
   obj={'name': "rahul",}
   js=JSON.stringify(obj);
   parse=JSON.parse(`{"name":"rahul","length":9}`); 
   console.log(js); 
   console.log(parse);      