class PostCreate {
    constructor(data) {
        this.data = data;
    }

    create() {
        let block = document.querySelector('.news_main')
        let post;
        let div;

        if (typeof (this.data) == 'string') {
            div = document.createElement('div');
            div.classList.add('post_time');
            div.innerHTML = this.data;
        }
        else {
            post = `
            <div class="post_body">
                <div class="person_img">
                    <img src="${this.data.imgUrl} "id='${this.data.id}' class="post_img" alt="">
                </div>
                <div class="person_post">
                    <div class="person_name">${this.data.postName}<div class="person_post_date">${this.data.postDate}</div>
                    </div>
                    <div class="person_content">${this.data.postContent}
                    </div>
                </div>
            </div>`
            div = document.createElement('div');
            div.innerHTML = post;
            div.classList.add('post')
        }
        block.appendChild(div)


    }


}