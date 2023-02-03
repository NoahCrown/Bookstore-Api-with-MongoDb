const { MongoClient } = require ("mongodb")


let dbConnection
let uri = "mongodb+srv://noahmongodb:GihHgNkoEiIy19mF@cluster0.ms2iye5.mongodb.net/?retryWrites=true&w=majority"

module.exports = {

    connectToDb: (cb) => {
        MongoClient.connect(uri)
        .then((cilent) => {
            dbConnection = cilent.db()
            return cb()
        })
        .catch(err => {
            console.log(err)
            return cb(err)
        })
    },
    getDb: () => dbConnection,
}