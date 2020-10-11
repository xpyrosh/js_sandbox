document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJSON);

document.getElementById('button3').addEventListener('click', getExternal);

// GET FROM TXT
function getText() {
    fetch('test.txt')
    .then(function(res){
        return res.text()
        .then(function(data) {
            console.log(data);
            document.getElementById('output').innerHTML = data;
        });
    })
    .catch(function(err){
        console.log(err);
    });
}

// GET FROM JSON
function getJSON() {
    fetch('posts.json')
    .then(function(res){
        return res.json()
        .then(function(data) {
            console.log(data);
            output = ''
            data.forEach(function(post){
                output += `<li>${post.title}</li>`
            })
            document.getElementById('output').innerHTML = output;
        });
    })
    .catch(function(err){
        console.log(err);
    });
}

// GET FROM EXTERNAL SOURCE
function getExternal() {
    fetch('https://api.github.com/users')
    .then(function(res){
        return res.json()
        .then(function(data) {
            console.log(data);
            output = ''
            data.forEach(function(user){
                output += `<li>${user.login}</li>`
            })
            document.getElementById('output').innerHTML = output;
        });
    })
    .catch(function(err){
        console.log(err);
    });
}