// let t=new Date();
// let date=t.toLocaleDateString();
// times=t.getHours()+":"+t.getMinutes()+":"+t.getSeconds();

let t,date,times;
setInterval (()=>{
    t=new Date();
     date=t.toLocaleDateString();
times=t.getHours()+":"+t.getMinutes()+":"+t.getSeconds();

    time.innerHTML=times+" on "+date;
},1000);

a=document.getElementById("additem");
a.addEventListener("click",()=>{
    console.log("updating list");
    tit=document.getElementById("fname").value;
    lst=document.getElementById("lname").value;
    desc=document.getElementById("ldescription").value;
    if (localStorage.getItem('itemJson')==null ){
        itemarr=[];
        itemarr.push([tit,lst,desc]);
        localStorage.setItem('itemJson', JSON.stringify(itemarr));
    }
    else{
        itemarr=localStorage.getItem('itemJson');
        itemjsonarr=JSON.parse(itemarr);
        itemJsonArray.puah()
    }
});