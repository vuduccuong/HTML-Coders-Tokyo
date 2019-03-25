window.onload = function () {
    loadAllPostId();
    loadAllComment();
    //deleteComment(5);
    //getCommentById(5);

    var createNewComment1 = document.getElementById('btnSave');
    createNewComment1.addEventListener('click', onSave);

    function onSave() {
        let id = document.getElementById('id').value;
        let body = document.getElementById('body').value;
        let postId = document.getElementById('postId').value;

        var data = {
            id: id,
            body: body,
            postId: postId
        };

        createNewComment(data);
    };


    //Click vào từng phần tử
    var objectClick = document.getElementsByClassName('enventOnClick');
    for(var i = 0; i< objectClick.length;i++)
    objectClick[i].addEventListener('click', onClick);
    

    function onClick(){
        let id = document.getElementById('enventOnClick').getAttribute('data-id');
        console.log(id);
    };
};