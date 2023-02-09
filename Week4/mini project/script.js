const robots = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      image: 'https://robohash.org/1?200x200'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      image: 'https://robohash.org/2?200x200'
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      image: 'https://robohash.org/3?200x200'
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      image: 'https://robohash.org/4?200x200'
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      image: 'https://robohash.org/5?200x200'
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      image: 'https://robohash.org/6?200x200'
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      image: 'https://robohash.org/7?200x200'
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      image: 'https://robohash.org/8?200x200'
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      image:'https://robohash.org/9?200x200'
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      image:'https://robohash.org/10?200x200'
    }
    ];
    const container = document.getElementById('container')
    const search = document.getElementById(`search`)


    //creation
    robots.forEach((bot) => {
        //elements
        const card = document.createElement(`div`);
        card.classList.add(`card`)
        card.id = bot.id
        const imageBot = document.createElement(`img`)
        imageBot.classList.add(`image`)
        const nameP = document.createElement(`p`);
        nameP.classList.add(`nameP`)
        const email = document.createElement(`p`);
        email.classList.add(`email`)
        imageBot.src = bot.image;
        console.log(`${bot.image}`);
        // text
        const nameText = bot.name;
        const EmailText = bot.email;
        // text nodes
        const nameTextNode = document.createTextNode(nameText)
        const EmailTextnode = document.createTextNode(EmailText)
        //appending
        card.appendChild(imageBot)
        nameP.appendChild(nameTextNode);
        email.appendChild(EmailTextnode);
        card.appendChild(nameP)
        card.appendChild(email)
        container.appendChild(card);
    })

    //search
    
//   parentNode
search.addEventListener(`keyup`, find)
function find(e){
    let searching = e.target.value.toLowerCase()
    robots.forEach((robot) =>{
        if (robot.name.toLowerCase().includes(searching)) {
            let found = document.getElementById(`${robot.id}`)
            found.classList.add(`found`)
            found.classList.remove(`hidden`)
        }else{
            let hidden = document.getElementById(`${robot.id}`)
            hidden.classList.add(`hidden`)
            hidden.classList.remove(`found`)
        }
    })

}


