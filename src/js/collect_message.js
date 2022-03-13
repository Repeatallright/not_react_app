// import sendBut from './messageIn'
// sendBut.addEventListener('click', collect)

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
const weekNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

function createCollectPost(time, content) {
    return {
        imgUrl: currentUser.img,
        postName: currentUser.name,
        postDate: time,
        postContent: content,
        id: currentUser.id
    }
}
function getCurrentDate() {
    let da = new Date()
    let month = monthNames[da.getMonth()];
    let week = weekNames[((da.getDay() + 6) % 7)];
    let day = da.getDate();
    return `${week}, ${month}, ${day}`
}
function getCurrentTime() {
    let time = (function () {
        let day = new Date()
        return `${day.getHours()}:${day.getMinutes()}`;
    }())
    return time
}

async function collect() {
    console.log('aaa');
    if (!messageIS) {
        if (currentUser) {
            // await tester2()
            const content = document.querySelector('.message_input').value;
            let time = getCurrentTime()
            let date = getCurrentDate()
            let post = createCollectPost(time, content)
            console.log(await postsDate);

            if (!content) return false
            else if (content == 'clear') postsDate = []

            document.querySelector('.message_input').value = '';

            let isDate = [];
            postsDate.forEach(item => {
                isDate.push(item[0] == date)
                if (item[0] == date) {
                    item.push(post)
                    return true
                }
            })

            if (!isDate.includes(true)) {
                if (content != 'clear') {
                    postsDate.push((postDay = [date]))
                    postsDate[postsDate.length - 1].push(post)


                }
            }
            sendPosts()
            console.log(this);
            let block = document.querySelector('.news_main').innerHTML = ''
            localStorage.setItem('posts', JSON.stringify(postsDate))
            await renderNews()
        }
    }
    else if (messageIS) {
        const content = document.querySelector('.message_input').value;
        let time = getCurrentTime()
        let date = getCurrentDate()
        let post = createCollectPost(time, content)
        if (!content) return false
        if (!await usersDate[usersDate.indexOf(currentUser)].treads[treadUser.id].includes(date)) {
            await usersDate[usersDate.indexOf(currentUser)].treads[treadUser.id].push(date)
            await usersDate[usersDate.indexOf(treadUser)].treads[currentUser.id].push(date)
        }
        await usersDate[usersDate.indexOf(currentUser)].treads[treadUser.id].push(post);
        await usersDate[usersDate.indexOf(treadUser)].treads[currentUser.id].push(post)
        document.querySelector('.message_input').value = '';
        let block = document.querySelector('.tread_main')
        block.innerHTML = ''
        localStorage.setItem('users', JSON.stringify(usersDate))
        renderTreads(currentUser.treads[treadUser.id])
    }
}


function renderNews() {
    if (document.querySelector('.news_main')) document.querySelector('.news_main').innerHTML = ''
    postsDate.forEach(item => {
        item.forEach(item => {
            let a = new PostCreate(item)
            a.create()
        })
    })
    addImgEvent()
}


function renderTreads(treads) {
    if (currentUser) {
        treads.forEach(item => {
            console.log(item);
            renderTread(item)
        })
    }
}