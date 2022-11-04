// Add your code here
function submitData (){
    const configObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: "Steve",
            email: 'steve@steve.com',
        }),
    
    } 
     return fetch('http://localhost:3000/users', configObject)
        .then(res => res.json()) 
        // .then(res => console.log(res))
        .then ((res) => { 
            let newDiv = document.createElement('div')
             newDiv.textContent = res.id
            document.querySelector('body').append(newDiv)
            console.log(res)
        })

        .catch(error => {
            alert("ERROR")
            let errorDiv = document.createElement('div')
             errorDiv.textContent = 'Unauthorized Access'
            document.querySelector('body').append(errorDiv)
            console.log(error)
        })

    
        
}
submitData()

