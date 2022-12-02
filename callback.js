const posts = [
    { title: 'sky', body:'sky is blue' },
    { title:'road', body: 'road is clean'}
]

function getPost() {
    document.body.innerHTML = 'making get call...'
    setTimeout(() => {
        let output = '';

        posts.forEach((post, index)=> {
            output += `<li>${post.title}</li>`;
        })
        document.body.innerHTML = output
    }, 1000);
}
function createPost(post, callback){
    document.body.innerHTML = 'making post call...'
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 1000);
}

function a(){
    alert('aa')
}
//getPost();

createPost({title:'ocean', body :'ocean is deep'}, getPost)

/*
we can make a function which accecpts another new function, that
another new function(callback) can be called anytime we want inside the 
function

source : https://www.youtube.com/watch?v=PoRJizFvM7s
*/

