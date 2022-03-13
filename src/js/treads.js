function renderTread(user) {
    console.log('dwenfrjwr');
    let block = document.querySelector('.tread_main')
    let post;
    let div;
    let treadClass = (function () {
        if (user.id != currentUser.id) return 'friend'
        else return 'user'
    }())
    if (typeof (user) == 'string') {
        div = document.createElement('div');
        div.classList.add('post_time');
        div.innerHTML = user;
    }
    else {
        const tread = `
        <div class="person_tread">
            <div class="tread_info">
                <div class="tread_name">${user.postName}</div>
                <div class="tread_time">${user.postDate}</div>
            </div>
            <div class="tread_content">
            ${user.postContent}
            </div>
        </div>`
        div = document.createElement('div');
        div.innerHTML = tread;
        console.log(tread);
        div.classList.add('tread_block')
        div.classList.add(treadClass)
    }
    block.appendChild(div)
}