// import main from "./date";
// import openTreads from "./open_treads"
// let usersDate = main.usersDate
// let currentUser = main.currentUser
function renderContacts() {
    let contacts = document.querySelector('.contacts');
    let friends = '';
    let exit_but_block = ''
    if (currentUser) {
        friends = collectFriends()
    }
    if (window.screen.width <= 500) exit_but_block = `<button class="enter_but">Log in</button>`;
    let block = `
    <div class="container_cont">
        <div class="nomad_list">
            <div class="back_menu">Back</div>
            <div class="nomad">Nomad</div>
            ${exit_but_block}
        </div>
        <div class="all_treads c_hover">
            <i class="far chat fa-comment"></i>
            <div class="">All Treads</div>
        </div>
        <div class="people">
            <div class="people_logo c_hover">
                PEOPLE
                <span class="people_count">${usersDate.length || '0'}</span>
            </div>
            <input class="people_input" value="" type="text">
            <div class="people_liste">
            </div>
        </div>
        <div class="friends">
            <div class="friends_logo c_hover">
                Friends
                <span class="friends_count">0</span>
            </div>
            <div class="friends_list">
                ${friends}
            </div>
        </div>
    </div>
</div>`
    contacts.innerHTML = block
    let back_menu = document.querySelector('.back_menu')

    back_menu.addEventListener('click', hideMenu)
    document.querySelector('.people_input').addEventListener('keyup', findePeople)
    document.querySelector('.all_treads').addEventListener('click', openTreads);

    if (window.screen.width <= 500) document.querySelector('.enter_but').addEventListener('click', check_enter_but);
    openPeopleBio('.friend_img')
}

/////////////////

function openPeopleBio(classe) {
    if (document.querySelectorAll(classe)) {
        document.querySelectorAll(classe).forEach(elem => {
            let a;
            usersDate.forEach(el => {
                if (el.id == elem.id) {
                    a = el
                }
            })
            elem.addEventListener('click', () => renderBio(a))
        })
    }
}
///////////////
renderContacts()
/////////////
function collectFriends() {
    let friends = ``;
    usersDate.forEach(item => {
        if (currentUser.friends.includes(item.id)) {
            friends += `
        <div class="friend_item">
            <div class="is_online online_true"></div>
            <img src="${item.img}" id="${item.id}" class="friend_img" alt="">
            <p class="friend_name c_hover">${item.name}</p>
        </div>`
        }
    })
    return friends
}
//////////////////

function findePeople() {
    if (currentUser) {
        let value = this.value.toLowerCase();
        let ides = ``;
        usersDate.forEach(item => {
            if (item.name.toLowerCase().includes(value) && item != currentUser && value.length > 0) {
                ides += `
            <div class="friend_item">
                <div class="is_online online_true"></div>
                <img src="${item.img}" id="${item.id}" class="friend_img" alt="">
                <p class="friend_name c_hover">${item.name}</p>
            </div>`
            }
        })
        document.querySelector('.people_liste').innerHTML = ides
        openPeopleBio('.friend_img')
        if (document.querySelectorAll('.friend_img')) {
            document.querySelectorAll('.friend_img').forEach(elem => {
                let a;
                usersDate.forEach(el => {
                    if (el.id == elem.id) {
                        a = el
                    }
                })
                elem.addEventListener('click', () => renderBio(a))
            })
        }
    }

}
////////////////////

function changeLoginButtom() {
    let but = document.querySelector('.enter_but');
    if (currentUser && but) {
        but.innerHTML = 'Account'
    } else {
        but.innerHTML = 'Log in'
    }
}
///////////////////

function check_enter_but() {
    let but = document.querySelector('.enter_but');
    if (but.innerHTML == 'Log in') move()
    else {
        renderBio(currentUser)
        document.querySelector('.close_mobile_bio').addEventListener('click', () => {
            document.querySelector('.mobile_bio').style.display = 'none'
            document.querySelector('body').style.overflow = 'visible'
        })
    }
}
////////////////////////
function hideMenu() {
    contacts.style.transform = `translate(-100%)`
} 