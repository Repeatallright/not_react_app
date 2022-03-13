async function login() {
    let login = document.querySelector('.login_in').value
    let password = document.querySelector('.password_in').value
    if (this.className == 'log_but') {
        console.log(usersDate);
        usersDate.forEach(item => {
            if (item['email'] == login && item['password'] == password) {
                currentUser = item;
                currentUserId = currentUser.id
                renderBio(currentUser)
                renderContacts()
                if (window.screen.width <= 500) {
                    changeLoginButtom()
                    move()
                }
                return false
            }
        })
    }

    else if (this.className == 'reg_but') {

        let username = document.querySelector('.username_in').value
        let aurotar = document.querySelector('.choosed_img').id || 'aa';

        let chacking = [];
        //chacking

        usersDate.forEach(item => {
            console.log(item);
            if (((item['email']).includes(login)) && ((item['name']).includes(username))) chacking.push(false)
            else {
                chacking.push(true);
                return true
            }


        })

        if (login.length > 1 && password.length > 1 && username.length > 1) chacking.push(true)
        else {
            chacking.push(false);
            return false
        }

        //chacking
        if (!chacking.includes(false)) {
            usersDate[usersDate.length] = {
                email: login,
                password: password,
                name: username,
                img: aurotar,
                id: `000${usersDate.length + 1}`,
                friends: [],
                treads: {}
            }
            renderLogin()
            localStorage.setItem('users', JSON.stringify(usersDate))

        }
    }

}