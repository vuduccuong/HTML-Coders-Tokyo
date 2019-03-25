//Create New Comment
function createNewComment(data) {
    axios.post('http://localhost:3000/comments', data)
        .then(() => {
            console.log('Created');
        })
        .catch(error => {
            console.log(error);
        });
};


//Load All Comment
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

//Get Comment By Id
function getCommentById(id) {
    alert(id);
    axios.get('http://localhost:3000/comments/' + id)
        .then(response => {
            bindDataByID(response.data)
        })
        .catch(error => {
            console.log(error);
        });
};

//Render All Comment
function render(arr) {
    let html = document.getElementById('data');

    let content = arr.map(item => {
        return "<tr class='enventOnClick' data-id='"+item.id+"'><td><input type='checkbox' value='" + item.id + "'></td><td>" + item.id + "</td><td>" + item.body + "</td><td>" + item.postId + "</td></tr>";
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

function bindDataByID(item) {
    document.getElementById('id').value = item.id;
    document.getElementById('body').value = item.body;
    document.getElementById('postId').value = item.postId;
};
