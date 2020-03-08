const Rest = (rest, data) => {
    switch (rest) {
        case "getContacts":
            fetch('http://jsonplaceholder.typicode.com/users')
            .then(res => {
                return res.json()
            })
            .then(data => {
                console.log(data)
            })
            .catch(err => {
                console.log(err)
            })
            break;
        
        case "saveContacts":
            return data 
            break

        default:
            return "No Rest function found"
            break
    }
}

export default Rest