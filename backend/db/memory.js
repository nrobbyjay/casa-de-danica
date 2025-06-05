const {MongoMemoryServer} = require('mongodb-memory-server')
const mongoose = require('mongoose')

let mongod = null

const connectInMemoryDB = async ()=>{
    try{
        mongod = await MongoMemoryServer.create()
        const uri = mongod.getUri()
        await mongoose.connect(uri)
        console.log('connected to database')
        return true
    }catch(e){
        console.log('an error occured connecting to database: '+ e)
        return false
    }

}

const stopInMemoryDB = async ()=>{
    await mongoose.disconnect()
    if(mongod){
        await mongod.stop()
    }
}

module.exports = {
    connectInMemoryDB,
    stopInMemoryDB
}