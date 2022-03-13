function openTreads() {
    if (currentUser) {
        if (window.screen.width <= 500) hideMenu()

        document.querySelector('.container_news').innerHTML = `${treadTopRender()}${treadsShowRender()}`
        document.querySelector('.return_news_main').addEventListener('click', returnNewsMain)

        let out = ``
        let users_id = [];
        let users_items = []
        // Fill user_id mass
        for (key in currentUser.treads) {
            console.log(key);
            users_id.push(key)
        }
        // Fill user_items mass
        // consist users
        users_id.forEach(item => {
            usersDate.forEach(elem => {
                if (elem.id == item) {
                    users_items.push(elem)
                }
            })
        })

        users_items.forEach(item => {
            let cont = item.treads[currentUser.id][item.treads[currentUser.id].length - 1].postContent
            if (cont.length > 100) cont = cont.slice(0, 100) + `...`
            out += `<div id="${item.id}"class="tread_item">
            <img src="${item.img}" class="tread_item_img" alt="">
            <div class="tread_item_main">
            <div class="tread_item_name">${item.name}</div>
            <div class="last_message">${cont}</div>
            </div>
        </div>`
        })
        // create block
        document.querySelector('.treads_show_main').innerHTML = out
        // fill blocks into 'out'
        let blocks = [...document.querySelectorAll('.tread_item')]

        blocks.forEach(item => {

            item.addEventListener('click', function () {
                let el = this.id;
                let user;

                usersDate.forEach(item => {
                    if (item.id == el) user = item
                })

                if (window.screen.width <= 500) {
                    document.querySelector('.mobile_bio').style.display = 'none'
                    document.querySelector('body').style.overflow = 'visible'

                }
                messageIS = true;
                treadUser = user;
                treadUserId = user.id
                shortenFun(user)
                renderTreads(currentUser.treads[(user.id)]);
                document.querySelector('.upload_messages').addEventListener('click', () => { uploadMessage(user) });
            })
        })
    }
}