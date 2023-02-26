const axios = require(`axios`);

const users = async() => {
    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users') 
        let info = res.data
        return info
    } catch (error) {
        console.log(error);
    }
}

users()