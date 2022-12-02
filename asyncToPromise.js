async function getUsers(){
    document.body.innerHTML = 'making getUsers call.....'

    var users  = await fetch('https://jsonplaceholder.typicode.com/users/1')
    const data = await users.json();
    return data;
}

function init(){
     getUsers()
    .then(res =>{
     document.body.innerHTML = res.name
    })
    .catch(err =>{
        document.body.innerHTML = 'some error'
    })
}
init();

/*
conversly we can consume an async call in Promise like code using .then() and .catch()
in then() block we get the output of async call
*/