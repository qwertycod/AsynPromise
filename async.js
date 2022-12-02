
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
                resolve(function(){
					alert(' #### post added #### ')
				})
            }
            else{
                reject('some error')
            }
        }, 1000);
    })
}

async function asyncAwait(){
    var res = await createPost({title: 'bus', 'body': 'bus is big'})
    res(); // res gives what we send from resolve
	getPost();
}

asyncAwait();


/*
its another simple way of dealing with Promises, we dont need .then() and
.catch() 
we simply make the call which returns a promise via await keyword
and do what we need with the result or do whatever we want after the 
await call.
Whatver we return from resolve block which may be a function, we get that
in the res variable in the aync function
*/

//The word “async” before a function means one simple thing: a function always returns a promise. 
//Other values are wrapped in a resolved promise automatically.

//For instance, this function returns a resolved promise with the result of 1; let’s test it:

async function f1() {
    return 1;
  }
  
  f1().then(alert); // 1
  