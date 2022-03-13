function messageInRender() {
    const block = `<div class="message_in">
    <div class="block">
        <div class="message_left">
            <input type="text" class="message_input" placeholder="Message in...">
        </div>
        <div class="message_right">
            <i class="fas message_send fa-circle-notch"></i>
        </div>
    </div>
</div>`;
    return block
}

function newsTopRender() {
    const block = `<div class="news_header">
        <div class="menu_open">
            Menu
        </div>
    Posts
</div>
`;
    return block
}

function treadTopRender() {
    const block = `<button class="return_news_main"><i class="fas some_little fa-arrow-left"></i> Back</button> <div class="tread_header">Treads</div>
    <button class="upload_messages"><i class="fas fa-sync-alt"></i></button>
`;
    return block
}

function newsMainRender() {
    const block = `<div class="news_main"></div>`;
    return block
}

function treadsMainRender() {
    const block = `<div class="tread_main"></div>`;
    return block
}

function treadsShowRender() {
    const block = `<div class="treads_show_main"></div>`;
    return block
}

document.querySelector('.container_news').innerHTML = `${newsTopRender()} ${newsMainRender()} ${messageInRender()}`
