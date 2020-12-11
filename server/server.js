const connection = require('./db/db')
const syncAndSeed = require('./db/seed')
const app = require('./index')
const port = (process.env.PORT || 8080)

const init = async() => {
    try{
        await connection.authenticate();
        await syncAndSeed();
        app.listen(port, () => console.log(
            `\nlistening on port ${ port }\n\nhttp://localhost:${ port }/\n`))
    }
    catch(ex) {
        console.log(`Houston, we have a problem\n${ ex }`)
    }
}

init();