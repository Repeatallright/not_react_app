// import login from "./login"
// import main from "./date"
// let usersDa
let menu_open = document.querySelector('.menu_open');
let contacts = document.querySelector('.contacts');

menu_open.addEventListener('click', showMenu);

function showMenu() {
    contacts.style.transform = `translate(0)`
}



function move() {
    if (window.screen.width <= 500) {
        let block = document.querySelector('.login_window');
        renderLogin()
        let a = block.style.transform == `translate(-50%, -50%)`
        if (a) {
            block.style.transform = `translate(-50%, -270%)`
            document.querySelector('.hide_window').style.display = `none`
            document.querySelector('body').style.overflow = ''
        } else {
            block.style.transform = `translate(-50%, -50%)`
            document.querySelector('.hide_window').style.display = `block`

            document.querySelector('body').style.overflow = 'hidden'
        }
        document.querySelector('.reg_active').addEventListener('click', renderSingup);

    }

}

function renderWindow(info) {
    let block;
    if (window.screen.width <= 500) block = document.querySelector('.login_window');
    else block = document.querySelector('.bio');
    block.innerHTML = info
}

function renderLogin() {
    let inp;
    if (window.screen.width >= 500) {
        let inp = `<div class="container">
        <h2 class="login_lable">Log in</h2>
        <input type="text" class="login_in bio_inputs" placeholder="Login">
        <input type="text" class="password_in bio_inputs" placeholder="Password">
        <div class="reg_active">do not have account</div>
        <div class="login_buttoms">
            <button class="log_but">Enter</button>
        </div>
    </div>`
        renderWindow(inp)
        document.querySelector('.reg_active').addEventListener('click', renderSingup)
        document.querySelector('.log_but').addEventListener('click', login)
    }
    else {
        let inp = `<div class="container">
        <i class="fas close_login fa-times"></i>
        <h2 class="login_lable">Log in</h2>
        <input type="text" class="login_in bio_inputs" placeholder="Login">
        <input type="text" class="password_in" placeholder="Password">
        <div class="reg_active">do not have account</div>
        <div class="login_buttoms">
            <button class="log_but">Enter</button>
        </div>
    </div>`
        renderWindow(inp)
        document.querySelector('.reg_active').addEventListener('click', renderSingup)
        document.querySelector('.log_but').addEventListener('click', login)
        document.querySelector('.close_login').addEventListener('click', move)
    }

}

async function renderSingup() {
    let inp;
    if (window.screen.width >= 500) {
        inp = `<div class="container">
        <h2 class="login_lable">Sign in</h2>
        <input type="text" class="username_in bio_inputs" placeholder="Username">
        <input type="text" class="login_in bio_inputs" placeholder="Login">
        <input type="text" class="password_in bio_inputs" placeholder="Password">
        <div class="choose_img_dt">
            <img src="img/Layer 10.png" id="img/Layer 10.png" class="choose_img_item" alt="">
            <img src="img/Layer 13.png" id="img/Layer 13.png" class="choose_img_item" alt="">
            <img src="img/Layer 16.png" id="img/Layer 16.png" class="choose_img_item" alt="">
            <img src="img/Photo.png" id="img/Photo.png" class="choose_img_item" alt="">
        </div>
        <div class="reg_unactive">back</div>
        <div class="login_buttoms">
            <button class="reg_but">Reg</button>
        </div>
    </div>`
        await renderWindow(inp)
        await document.querySelector('.reg_unactive').addEventListener('click', renderLogin)
        await document.querySelector('.reg_but').addEventListener('click', login)
    }
    else {
        inp = `<div class="container">
        <i class="fas close_login fa-times"></i>
        <h2 class="login_lable">Sign in</h2>
        <input type="text" class="username_in" placeholder="Username">
        <input type="text" class="login_in" placeholder="Login">
        <input type="text" class="password_in" placeholder="Password">
        <div class="choose_img">
            <img src="img/Layer 10.png" id="img/Layer 10.png" class="choose_img_item" alt="">
            <img src="img/Layer 13.png" id="img/Layer 13.png" class="choose_img_item" alt="">
            <img src="img/Layer 16.png" id="img/Layer 16.png" class="choose_img_item" alt="">
            <img src="img/Photo.png" id="img/Photo.png" class="choose_img_item" alt="">
        </div>
        <div class="reg_unactive">back</div>
        <div class="login_buttoms">
            <button class="reg_but">Reg</button>
        </div>
    </div>`
        renderWindow(inp)
        document.querySelector('.reg_unactive').addEventListener('click', renderLogin)
        document.querySelector('.reg_but').addEventListener('click', login)
        document.querySelector('.close_login').addEventListener('click', move)

    }


    let a = [...document.querySelectorAll('.choose_img_item')]
    a.forEach(item => {
        item.classList.remove('choosed_img')
        item.addEventListener('click', function (event) {
            a.forEach(elem => {
                elem.classList.remove('choosed_img')
            })
            item.classList.add('choosed_img')
        })
    })
}

if (window.screen.width >= 500) {
    renderLogin()
}
if (window.screen.width <= 500) {
    window.onload = () => move()
} 