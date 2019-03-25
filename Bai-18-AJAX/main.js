
window.onload = function(){ 
    loadAllPostId();
loadAllComment();
//deleteComment(5);

document.getElementById('idComment').onclick = function(e){
    if (this.checked){
        alert("Bạn vừa thích freetuts.net");
    }
    else{
        alert("Bạn vừa bỏ thích freetuts.net");
    }
};
};