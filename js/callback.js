// const posts = [
//     {title: 'Post One', body: 'This is post one'},
//     {title: 'Post Two', body: 'This is post two'}
// ];

// function createPost() {
//     setTimeout(function() {
//         posts.push(posts);
//     }, 2000);
// }

// function getPosts(){
//     setTimeout(function(){
//         let output = '';
//         posts.forEach(function(post){
//             output += `<li>${post.title}</li>`;
//         });
//         document.body.innerHTML = output;
//     }, 1000);
// }

// createPost({title: 'Post Three', body: 'This is Post Three'});


function createPost() {
    setTimeout(function() {
        posts.push(posts);
        callback();
    }, 2000);
}

function getPosts(){
    setTimeout(function(){
        let output = '';
        posts.forEach(function(post){
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

createPost({title: 'Post Three', body: 'This is Post Three'}, getPosts);