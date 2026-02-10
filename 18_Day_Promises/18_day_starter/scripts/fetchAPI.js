const url = 'https://restcountries.com/v2/all'
fetch(url)
    .then(responce => responce.json())
    .then(dats => {
    console.log(data)
    })
.catch(error=>console.error(error)
)