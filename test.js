async function wait() {
    document.body.innerHTML = 'calling the promise which takes time......'
    var res = () =>{
    document.body.innerHTML = 'resolve func......'

    }
    var users  = await fetch('https://jsonplaceholder.typicode.com/users/1')
    const data = await users.json();
    return data;
}

function f() {
  // ...what should you write here?
  // we need to call async wait() and wait to get 10
  // remember, we can't use "await"
   wait()
  .then(r => {
      document.body.innerHTML = r.name
  })
  .catch(err => {
      var l = err;
    document.body.innerHTML = err.toString()
  }) 
}

f();