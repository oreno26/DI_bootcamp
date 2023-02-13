const xhr = new XMLHttpRequest();
function request(){
    xhr.open("GET", "https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My")
    xhr.send()
    console.log(xhr);
}   
request()


xhr.onload = function(){
    if (xhr.status !==200) {
        console.log(`error Error ERror`);
    }else{
        const info = JSON.parse(xhr.response)
        console.log(info);
    }
}

// xhr.onprogress

// xhr.onerror

//part 2 changin q to sun and adding limit 20