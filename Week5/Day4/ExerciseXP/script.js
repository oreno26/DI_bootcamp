async function swapi(){
    const response = await fetch("https://www.swapi.tech/api/starships/9/")
    const responseJson = await response.json();
    const objectStarWars = responseJson.result
    console.log(objectStarWars);
}

swapi()


//2
function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling'); //log call
    let result = await resolveAfter2Seconds();
    console.log(result);// resolved after
}

asyncCall();
