window.onload=function(){
    displayItems();
};


function addItem(){

let category=document.getElementById("category").value;
let item=document.getElementById("item").value;
let place=document.getElementById("place").value;
let date=document.getElementById("date").value;
let contact=document.getElementById("contact").value;


if(item=="" || place=="" || date=="" || contact=="")
{
    alert("Please fill all details");
    return;
}


let items=JSON.parse(localStorage.getItem("lostItems")) || [];


let newItem={

category:category,
item:item,
place:place,
date:date,
contact:contact

};


items.push(newItem);


localStorage.setItem("lostItems",JSON.stringify(items));


displayItems();


document.getElementById("item").value="";
document.getElementById("place").value="";
document.getElementById("date").value="";
document.getElementById("contact").value="";


}



function displayItems(){

let list=document.getElementById("list");

list.innerHTML="";


let items=JSON.parse(localStorage.getItem("lostItems")) || [];


items.forEach(function(data,index){


list.innerHTML += `

<div class="item">

<h3>${data.item}</h3>

<p>Category : ${data.category}</p>

<p>📍 ${data.place}</p>

<p>📅 ${data.date}</p>

<p>📞 ${data.contact}</p>


<button class="delete" onclick="deleteItem(${index})">
Delete
</button>


</div>

`;


});


}



function deleteItem(index){


let items=JSON.parse(localStorage.getItem("lostItems")) || [];


items.splice(index,1);


localStorage.setItem("lostItems",JSON.stringify(items));


displayItems();


}



function searchItem(){


let search=document.getElementById("search").value.toLowerCase();


let cards=document.getElementsByClassName("item");


for(let i=0;i<cards.length;i++){


let text=cards[i].innerText.toLowerCase();


if(text.includes(search))
{
cards[i].style.display="block";
}

else{

cards[i].style.display="none";

}


}


}


