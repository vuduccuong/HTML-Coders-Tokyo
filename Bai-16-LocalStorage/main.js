
var storageKey = 'listFriend';
 var dataString = localStorage.getItem(storageKey);

 var friends;
 if(dataString){
     friends = JSON.parse(dataString);
 }else{
     friends = [];
 }


 //Thêm dữ liệu
 var eventAdd = document.getElementById('btnAddValue');
 eventAdd.addEventListener('click', onSave);

 function onSave(){
     var name = document.getElementById('name');
     var age = document.getElementById('age');
     var address = document.getElementById('address');
     console.log(name.value, age.value,address.value);

     var data = {name : name.value, age : parseInt(age.value), address : address.value};
    
     friends.push(data);
    name.value='';
    age.value = '';
    address.value = '';
    localStorage.setItem(storageKey, JSON.stringify(friends));
    render(friends);
 }

 //Load dữ liệu
function render(friends){
    var html = document.getElementById('table-myFriend');
    var content = friends.map(item =>{
        return "<tr><td>"+item.name+"</td><td>"+item.age+"</td><td>"+item.address+"</td></tr>"
    });

    
    html.innerHTML = content.join('');

};
    
render(friends);