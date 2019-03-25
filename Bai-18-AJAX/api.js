function loadAllPostId() {
    // Make a request for a user with a given ID
    axios.get('http://localhost:3000/posts')
        .then(function (response) {
            let arr = response.data;
            renderPostId(arr);
        })
        .catch(function (error) {
            console.log(error);
        });
};

function loadAllComment() {
    axios.get('http://localhost:3000/comments')
        .then(function (response) {
            let arr = response.data;
            render(arr);
        })
        .catch(function (error) {
            console.log(error);
        });
};

//Delete
function deleteComment(id) {
    axios.delete('http://localhost:3000/comments/' + id)
        .then(function (response) {
            conssole.log("Delete ok");
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
};


//Render All Comment
function render(arr) {
    let html = document.getElementById('data');

    let content = arr.map(item => {
        return "<tr><td><input type='checkbox' value='"+item.id+"' id='idComment'></td><td>" + item.id + "</td><td>" + item.body + "</td><td>" + item.postId + "</td></tr>";
    });

    html.innerHTML = content.join('');
}

//Render PostId to Select
function renderPostId(arr) {
    let html = document.getElementById('postId');
    let content = arr.map(item => {
        return "<option value='" + item.id + "'>" + item.title + "</option>"
    });

    html.innerHTML = content.join('');
}
