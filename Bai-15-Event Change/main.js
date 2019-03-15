var friends = [
    {
        name:'Vũ Đức Cường',
        age:23,
        address:'Ninh Bình'
    },
    {
        name:'Tạ Thành Đạt',
        age:21,
        address: 'Ninh Bình'
    },
    {
        name:'Đào Xuân Tùng',
        age:23,
        address:'Hải Phòng'
    },
    {
        name:'Cao Văn Sang',
        age:23,
        address:'Hải Phòng'
    },
    {
        name:'Nguyễn Quang Huy',
        age:'23',
        address:'Hoà Bình'
    }
];

var addressFilter = document.getElementById('address-filter');
addressFilter.addEventListener('change', onAddressFilter);

function onAddressFilter(){
    var valueAddress = this.value;
    var listFilter = friends.filter(item => item.address.indexOf(valueAddress) > -1);
    
    render(listFilter);
}

function render(friends){
    var html = document.getElementById('table-myFriend');
    var content = friends.map(item =>{
        return "<tr><td>"+item.name+"</td><td>"+item.age+"</td><td>"+item.address+"</td></tr>"
    });

    
    html.innerHTML = content.join('');

};
    
render(friends);