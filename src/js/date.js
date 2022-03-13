
let postsDate = []
getPosts()


let usersDate = JSON.parse(localStorage.getItem('users')) || [
    person = {
        email: 'aaa',
        password: 'aaa',
        name: 'Amilia Luna',
        img: "src/img/girl.png",
        id: '0001',
        friends: [],
        treads: {}
    }
]
getUsers()
let currentUser;
let treadUser;

let messageIS = false;
let testerMass;
let currentUserId
let treadUserId


//Fetch postsDate

async function getPosts() {
    let url = 'https://getpantry.cloud/apiv1/pantry/48772c43-095e-44c0-b987-edab68e5bbda/basket/postsDate';
    let response = await fetch(url);
    let posts = await response.json();
    postsDate = await posts['postsDate'];
    console.log(postsDate);
}

async function sendPosts() {
    let url = "https://getpantry.cloud/apiv1/pantry/48772c43-095e-44c0-b987-edab68e5bbda/basket/postsDate";
    fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json;charset=utf-8' },
        body: JSON.stringify({ postsDate })
    })
}

//Fetch usersDate

async function getUsers() {
    let url = 'https://getpantry.cloud/apiv1/pantry/48772c43-095e-44c0-b987-edab68e5bbda/basket/usersDate';
    let response = await fetch(url);
    let users = await response.json();
    usersDate = await users['usersDate'];
    console.log(usersDate);
}

async function sendUsers() {
    let url = "https://getpantry.cloud/apiv1/pantry/48772c43-095e-44c0-b987-edab68e5bbda/basket/usersDate";
    fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json;charset=utf-8' },
        body: JSON.stringify({ usersDate })
    })
}


