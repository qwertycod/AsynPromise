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
        }, 1200);
    }

    function errHandler(err) {                 
        document.write(err.toString());          // its called when error
        console.log(err.toString())
    }

    function updateNewStudent(){
        var url = validUrl                         // for resolve case
        //var url = incorrectUrl                  // for reject case
        document.body.innerHTML = 'making the API call...'
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
        setTimeout(() => {
        updateNewStudent()
            .then(getAllstudents)      // this function 'getAllstudents' is called when we resolve
            .catch(errHandler)  
        }, 1200)  
        document.body.innerHTML = 'calling the updateNewStudent method in 1 second...'
    }
    catch(e){
        document.write(e);
    }
