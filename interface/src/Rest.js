const Rest = (rest, data) => {
    const config = require('./assets/config.json')

    switch (rest) {
        case "getConfig":
            // fetch('[localhost url]')
            // .then(res => {
            //     return res.json()
            // })
            // .then(data => {
            //     console.log(data)
            // })
            // .catch(err => {
            //     console.log(err)
            // })

            return config
            break;

        case "getPlaying":
            return config.playing
            break

        case "setPlaying":
            let playing = + config.playing
            playing ^= 1
            console.log(!!playing)
            break
        
        case "getEnvironment":
            return data 
            break


        default:
            return "No Rest function found"
            break
    }
}

export default Rest