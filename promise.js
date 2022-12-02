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
function createPost(post){
    document.body.innerHTML = 'making post call...'
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            posts.push(post);
            const error = false;
            if(!error){
                resolve(console.log(' #### post added #### '))
            }
            else{
                reject('#### this error generates from reject block of promise #####')
           }
        }, 1000);
    })
}

try{
createPost({title: 'car', body:'a new car'})
.then(getPost)      // this function 'getPost' is called when we resolve
.catch(err => {
     document.write(err.toString());
     console.log(err.toString())
 })      // its called when error
}
catch(e){
    document.write(e);
}

/* in promise we give two params resolve and reject, we write code
to call the resolve when there's no error and call rejet when we 
get some error.
In then() block of promise :
if we had resolved in Promise, we can call our callback function;
else  we call catch block.
source : https://www.youtube.com/watch?v=PoRJizFvM7s
*/