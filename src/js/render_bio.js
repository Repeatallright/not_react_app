function renderBio(user) {
    let bio = document.querySelector('.bio');
    let friend = `Add friend`;
    let friend_class = `add_friend`;
    let mobile_block

    if (currentUser.friends.includes(user.id) && currentUser != user) {
        friend = `Message`
        friend_class = `send_message`
    }
    let exiteCl = `exite_but`;
    let exiteText = `Exite`;
    if (user != currentUser) {
        exiteCl = `exite_but_user`;
        exiteText = `Close`
    }

    if (window.screen.width <= 500) {
        mobile_block = `<div class="container_cont_m">
    <i class="fas close_mobile_bio fa-times"></i>
    <img src="${user.img}" alt="" class="mobile_bio_img">
    <div class="mobile_bio_main">
        <div class="name">${user.name}</div>
        <div class="describe"></div>
        <div class="bio_mobile_contacts">
            <i class="fab con fa-facebook-f"><a href="https://www.facebook.com/"></a></i>
            <i class="fab con fa-twitter"><a href="https://twitter.com"></a></i>  
            <i class="fab con fa-youtube"><a href="https://www.youtube.com/"></a></i>  
            <i class="fab con fa-instagram"><a href="https://www.instagram.com/"></a></i> 
        </div>
        <div class="bio_message">
            <a href="#" class="${friend_class}">${friend}</a>
        </div>
        <div class="user_name_mobile">
            <p class="ans_mobile">Username</p>
            <p class="value_mobile">@${user.name}</p>
            <p class="ans_mobile">Email</p>
            <p class="value_mobile">${user.email}</p>
            <p class="ans_mobile">Skype</p>
            <p class="value_mobile"></p>
        </div>
    </div>
    
</div>
</div>`
        bio = document.querySelector('.mobile_bio')
        bio.style.display = 'flex'
        renderNews()
        hideMenu()
        bio.innerHTML = mobile_block
        if (user == currentUser) {
            let block = document.createElement('button')
            block.classList.add('exite_but_mobile')
            block.innerHTML = 'Exite'
            document.querySelector('.container_cont_m').appendChild(block)
            document.querySelector('.exite_but_mobile').addEventListener('click', () => {
                exite_bio()
                returnNewsMain()
                document.querySelector('.news_main').innerHTML = ''
                document.querySelector('.mobile_bio').style.display = 'none'
                document.querySelector('body').style.overflow = 'visible'
            });

        }

        document.querySelector('.close_mobile_bio').addEventListener('click', () => {
            document.querySelector('.mobile_bio').style.display = 'none'
            document.querySelector('body').style.overflow = 'visible'
        })
        if (friend == 'Add friend') addFriend(user)
        else createTread(user)

    }
    else {

        mobile_block = `<div class="container">
        <img src="${user.img}" alt="">
        <div class="bio_main">
            <div class="name">${user.name}</div>
            <div class="describe"></div>
            
    
            <div class="bio_message">
                <buttom  class="${friend_class}">${friend}</buttom>
            </div>
    
            <div class="user_name">
                <p class="ans">Username</p>
                <p class="value">@${user.name}</p>
                <p class="ans">Email</p>
                <p class="value">${user.email}</p>
                <p class="ans">Skype</p>
                <p class="value"></p>
            </div>
            
        </div>
    </div>
    <buttom class="${exiteCl}">${exiteText}</buttom>`
        if (user == currentUser) {
            bio.innerHTML = mobile_block
            document.querySelector('.exite_but').addEventListener('click', exite_bio)
            returnNewsMain()
        }
        else {
            returnNewsMain()
            bio.innerHTML = mobile_block
            document.querySelector('.exite_but_user').addEventListener('click', () => renderBio(currentUser))
            console.log('ccc');

        }
        // Add firend
        if (friend == 'Add friend') addFriend(user)
        else createTread(user)
    }
}




function exite_bio() {
    currentUser = null;
    renderContacts()
    if (window.screen.width <= 500) {
        changeLoginButtom()
    }
    else {
        renderLogin()
    }
}



function addFriend(user) {
    let friend_message = [...document.querySelectorAll('.add_friend')]
    friend_message.forEach(item => {
        item.addEventListener('click', function () {
            console.log(this.innerHTML);
            if (this.innerHTML == `Add friend`) {
                currentUser.friends.push(user.id)
                usersDate[usersDate.indexOf(user)].friends.push(currentUser.id)
                console.log(currentUser.friends);
                renderBio(user)

                renderContacts()
            }
            else if (this.innerHTML == 'Message') {
                createTread(user)
                console.log('sssssssssssssssss');
            }
        })
    })
}

async function createTread(user) {
    let friend_message = [...document.querySelectorAll('.send_message')];
    console.log(friend_message);
    friend_message.forEach(item => {
        item.addEventListener('click', function () {
            console.log(this.innerHTML);
            if (true) {
                messageIS = true;
                treadUser = user;
                treadUserId = user.id
                // usersDate.forEach(item => {
                //     if (item.id == currentUserId) currentUser = item;
                //     else if (item.id == treadUser.id) treadUser = item
                // })
                if (!currentUser.treads[user.id]) {
                    console.log(currentUser.treads);

                    currentUser.treads[user.id] = [];
                    user.treads[currentUser.id] = []

                    usersDate[usersDate.indexOf(currentUser)].treads[user.id] = [];
                    usersDate[usersDate.indexOf(treadUser)].treads[currentUser.id] = [];



                    if (window.screen.width <= 500) {
                        document.querySelector('.mobile_bio').style.display = 'none'
                        document.querySelector('body').style.overflow = 'visible'
                    }
                    shortenFun(user)
                }
                else {
                    if (window.screen.width <= 500) {
                        document.querySelector('.mobile_bio').style.display = 'none'
                        document.querySelector('body').style.overflow = 'visible'
                    }


                    shortenFun(user)
                    console.log(currentUser.treads[(user.id)]);
                    renderTreads(currentUser.treads[(user.id)]);

                }
            }
        })
    })
}
async function shortenFun(user) {
    document.querySelector('.container_news').innerHTML = `${treadTopRender()} ${treadsMainRender()} ${messageInRender()}`;
    document.querySelector('.upload_messages').addEventListener('click', () => { uploadMessage(user) });
    // document.querySelector('.message_send').removeEventListener('click', collect);
    // document.querySelector('.message_send').addEventListener('click', collectTreads);
    document.querySelector('.message_send').addEventListener('click', collect)
    document.querySelector('.tread_header').innerHTML = treadUser.name;
    document.querySelector('.return_news_main').addEventListener('click', returnNewsMain)
}


function returnNewsMain() {
    messageIS = false;
    document.querySelector('.container_news').innerHTML = `${newsTopRender()} ${newsMainRender()} ${messageInRender()}`
    renderNews()
    // if (!messageIS) document.querySelector('.message_send').addEventListener('click', collect)
    // else document.querySelector('.message_send').addEventListener('click', collectTreads)
    document.querySelector('.message_send').addEventListener('click', collect)
    menu_open = document.querySelector('.menu_open');
    menu_open.addEventListener('click', showMenu);
}
async function uploadMessage(user) {
    await getUsers()
    let block = await document.querySelector('.tread_main')
    block.innerHTML = await '';
    console.log(user.treads);
    console.log('aaa');
    await renderTreads(user.treads[(currentUser.id)]);
}