var btn = document.getElementById('clearButton');
btn.addEventListener('click',clearAll );
btn.addEventListener('click', ()=>{
    console.log("ok");
})

function clearAll(){
    var form = document.getElementById('loginForm');
    form.reset();
}