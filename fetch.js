const url='https://dummyapi.online/api/movies' //countries api
fetch(url)
       .then(response => response.json()) // accessing the API data as JSON
       .then(data => {
        //getting the data
        console.log(data)
       })
       .catch(error => console.error(error))  // handling error if something wrong
