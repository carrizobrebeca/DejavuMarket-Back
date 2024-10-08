const server = require('./src/app')
const { conn } = require('./src/db');

const PORT = process.env.PORT;


conn.sync({ alter :true}).then(() => {
server.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
    
})
}).catch(error => console.error(error))
