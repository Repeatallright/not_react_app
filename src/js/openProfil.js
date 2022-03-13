let postImg;
function addImgEvent() {
    postsImg = [...document.getElementsByClassName('post_img')]
    postsImg.forEach(item => {
        item.addEventListener('click', openprofile)
    })
} addImgEvent()

function openprofile() {
    if (currentUser) {
        let elem;
        usersDate.forEach(item => {
            if (item.id == this.id && this.id != currentUser.id) {
                elem = item;
                return false;
            }
        })
        if (elem) {
            if (window.screen.width <= 500) {
                renderBio(elem)
                document.querySelector('.close_mobile_bio').addEventListener('click', () => {
                    document.querySelector('.mobile_bio').style.display = 'none'
                    document.querySelector('body').style.overflow = 'visible'
                })
            }
            else renderBio(elem)
        }
    }
}

// Open person profile by post img clicking