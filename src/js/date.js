
let postsDate = []


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
let currentUser;
let treadUser;

let messageIS = false;
let testerMass;
let currentUserId
let treadUserId

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




// export default {
//     currentUser: currentUser,
//     postsDate: postsDate,
//     usersDate: usersDate
// }





// // Fetch users from mock api

// async function fetchUsersDate() {
//     let urlUsers = 'https://61e943e17bc0550017bc6193.mockapi.io/api/v1/usersDate';
//     let len = await getUsersLen()
//     if (len.length > 0) {
//         await fetch(`${urlUsers}/${len.length}`, {
//             method: 'DELETE',
//             headers: { 'Content-Type': 'application/json;charset=utf-8' },
//             body: JSON.stringify(usersDate)
//         })
//     }

//     await fetch(urlUsers, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json;charset=utf-8' },
//         body: JSON.stringify(usersDate)
//     })
//     return getUsersLen()
// }


// async function getUsersLen() {
//     let urlUsers = 'https://61e943e17bc0550017bc6193.mockapi.io/api/v1/usersDate';
//     let a = await fetch(urlUsers)
//     let mass = []
//     let response = await a.json();
//     let b = await response
//     return response;
// }

// async function tester() {
//     let testerMass = await getUsersLen()
//     usersDate = []
//     for (key in testerMass[0]) {
//         if (testerMass[0][key].id) {
//             usersDate.push(testerMass[0][key])
//         }
//     }
//     console.log(usersDate);
//     return usersDate
// }
// tester()


// // Fetch posts from mock api

// async function fetchPostsDate() {
//     let urlPosts = 'https://61e943e17bc0550017bc6193.mockapi.io/api/v1/postsDate';
//     let len = await getPostsLen()
//     console.log(len.length);
//     if (len.length > 0) {
//         await fetch(`${urlPosts}/${len.length}`, {
//             method: 'DELETE',
//             headers: { 'Content-Type': 'application/json;charset=utf-8' },
//             body: JSON.stringify(postsDate)
//         })
//         console.log('aaaaa');
//     }

//     await fetch(urlPosts, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json;charset=utf-8' },
//         body: JSON.stringify(postsDate)
//     })
//     return getUsersLen()
// }


// async function getPostsLen() {
//     let urlPosts = 'https://61e943e17bc0550017bc6193.mockapi.io/api/v1/postsDate';
//     let a = await fetch(urlPosts)
//     let mass = []
//     let response = await a.json();
//     let b = await response
//     return response;
// }

// async function tester2() {
//     let testerMass = await getPostsLen()
//     postsDate = []
//     if (testerMass[0]) {
//         for (key in testerMass[0]) {
//             if (testerMass[0][key].length > 1) {
//                 postsDate.push(testerMass[0][key]);
//             }
//         }
//     }
// }
// tester2()