function publishPost(){

let title=document.getElementById("title").value;
let content=document.getElementById("content").value;

let posts=JSON.parse(localStorage.getItem("posts")) || [];

posts.push({title:title,content:content});

localStorage.setItem("posts",JSON.stringify(posts));

alert("Blog Published!");

}

window.onload=function(){

let posts=JSON.parse(localStorage.getItem("posts")) || [];

let output="";

for(let i=0;i<posts.length;i++){

output+="<h3>"+posts[i].title+"</h3><p>"+posts[i].content+"</p><hr>";

}

if(document.getElementById("posts")){
document.getElementById("posts").innerHTML=output;
}

}