//GET
//Three States of Promise
//Pending
//Fulfilled
//Rejected

//Two methods to handle the promises
//.then - state where promise is fulfilled 
//.catch - state where the promise is rejected

//ASYNCHRONOUS

// GET - Retrieve Data 
fetch('https://swapi.dev/api/people/1/')
.then(response => response.json())
.then(data => console.log('Character: ', data.name, data.height))
.catch(error => console.log("Error: ", error));

// //POST - Send data
// let CharacterData = {
//     name:'Spock',
//     height:'100'
// };

// let requestOptions = {
//     method: 'POST',
//     headers: {'Content-Type': 'application/json'},
//     body: JSON.stringify(CharacterData)
// };



//PUT - Update to a existing function
let updatedCharacterData = {
    name: 'Spongebob',
    height: '200'
}

// let requestOptions = {
//     method: 'PUT',
//     headers: {'Content-Type': 'application/json'},
//     body: JSON.stringify(updatedCharacterData)
// };
// fetch('https://swapi.dev/api/people/1/', requestOptions)
// .then(response => response.json())
// .then(data => console.log('Put Response: ', data))
// .catch(error => console.log('Error: ', error));


//DELETE

let requestOptions = {
    method: 'DELETE'
};

fetch('https://swapi.dev/api/people/1/', requestOptions)
.then(response => response.status)
.then(status => console.log('Delete response: ', status))
.catch(error => console.log('Error: ', error));

