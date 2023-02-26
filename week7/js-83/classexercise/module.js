const axios = require(`axios`);

const axFetch = async () => {
    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users')
         return res.data
    } catch (error) {
        console.log(error);
    }
}

axFetch()
 module.exports =  (axFetch)