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

async function fetchUsers(){
    document.body.innerHTML = 'making fetch users call...'

    const users = await fetch('https://jsonplaceholder.typicode.com/users')	// return a promise

    const data = await users.json();

    return data;
}

async function init(){
    var users = await fetchUsers();
    document.body.innerHTML = users[0].name
	
	// setTimeout function is called when we get output from our async call to fetchUsers()
	setTimeout(() => {
        getPost();
    }, 1000);
   //var post = await createPost({title:'ship', body: 'made of wood'})
   
}

init();

/*
async and await can be used with functions which either returns a Promise(like fetch call) or 
could be awaitable like the fetch call.


*/