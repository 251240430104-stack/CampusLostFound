function addItem() {

    let category = document.getElementById("category").value;
    let item = document.getElementById("item").value;
    let place = document.getElementById("place").value;
    let date = document.getElementById("date").value;
    let contact = document.getElementById("contact").value;
let photo=document.getElementById("photo").files[0];

let imageURL="";

if(photo){
    imageURL=URL.createObjectURL(photo);
}
    if(item=="" || place=="" || date=="" || contact==""){
        alert("Please Fill All Fields");
        return;
    }

    let list = document.getElementById("list");

    list.innerHTML += `
    <div class="item">
        <h3>${item}</h3>
        <p><b>Category:</b> ${category}</p>
        <p>📍 ${place}</p>
        <p>📅 ${date}</p>
        <p>📞 ${contact}</p>
        <button onclick="this.parentElement.remove()">Delete</button>
    </div>
    `;

    document.getElementById("item").value="";
    document.getElementById("place").value="";
    document.getElementById("date").value="";
    document.getElementById("contact").value="";
}
function searchItem(){

    let input = document.getElementById("search").value.toLowerCase();

    let items = document.getElementsByClassName("item");

    for(let i=0;i<items.length;i++){

        if(items[i].innerText.toLowerCase().includes(input)){
            items[i].style.display="block";
        }
        else{
            items[i].style.display="none";
        }

    }

}

