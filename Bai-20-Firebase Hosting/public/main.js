const sessionKey = 'listFriend';
let dataString = sessionStorage.getItem(sessionKey);

var friends;
if(dataString){
    friends = JSON.parse(dataString);
}else{
    friends = [];
};


 //Thêm dữ liệu
 var eventAdd = document.getElementById('btnAddValue');
 eventAdd.addEventListener('click', onSave);

function onSave(){
    let name = document.getElementById('name');
    let age = document.getElementById('age');
    let adress = document.getElementById('address');
    
    let data = {name: name.value, age :age.value, address: address.value};

    friends.push(data);
    name.value='';
    age.value='';
    address.value='';

    sessionStorage.setItem(sessionKey,JSON.stringify(friends));

    render(friends);
}

function render(friends){
 let html = document.getElementById('table-myFriend');
 let content = friends.map(item=>{
     return "<tr><td>"+item.name+"</td><td>"+item.age+"</td>"+item.address+"</tr>";
 })

 html.innerHTML = content.join('');
}

render(friends);