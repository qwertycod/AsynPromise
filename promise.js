    const students = ['Alex', 'Bob']

    const validUrl = 'https://jsonplaceholder.typicode.com/users/1'
    const incorrectUrl = 'https://jsonplaceholder.typicode.com/users/x'


    function getAllstudents(student) {
        students.push(student)
        document.body.innerHTML = 'resolve case...'
        setTimeout(() => {
            let output = '';
            students.forEach((s, index)=> {
                output += '<li>' + s + '</li>' + '\n'
            })
            document.body.innerHTML = output
        }, 1000);
    }

    function errHandler(err) {                 
        document.write(err.toString());          // its called when error
        console.log(err.toString())
    }

    function updateNewStudent(){
        var url = validUrl                         // for resolve case
        //var url = incorrectUrl                  // for reject case
        document.body.innerHTML = 'making get call...'
        return new Promise((resolve, reject)=>{
            let request = new XMLHttpRequest();
            
            request.addEventListener("loadend", function() {
                const response = JSON.parse(this.responseText);
                if (this.status === 200 && response.name) {                
                resolve(response.name);
                } else {
                reject('some error occoured! Reject case called!');
                }
            });
            request.open("GET", url, true);
            request.send();
        })
    }

    try{
        updateNewStudent()
            .then(getAllstudents)      // this function 'getAllstudents' is called when we resolve
            .catch(errHandler)     
    }
    catch(e){
        document.write(e);
    }

/* In Promise method we give two params, resolve and reject, we write code
to call the resolve when there's no error and call rejet when we 
get some error.

Suppose our main aim is to call an API to get a student data.

In the value of resolve varibale we pass a method which will be called
when the main method returns a value(success case) and the value returned
from the main method which is the student data in this case is passed
to the resolve variable(the method), now its the duty of the resolve 
method to show success message in the output.

In case our main method fail which means our API failed to get the 
student data we will have to raise an error, so the method which will actually
raise an error is received in the reject parameter of the Promise method,
we may raise an error directly also like using alert box in case of error,
but using the reject variable(a method) is the norm in case of Promise.

Once the resolve/reject method receives its data, it is passed to the
then method in case of success
or 
the catch method in case of failure

Source - https://qwertycod.com/javascript/handling-async-methods-made-easy/
